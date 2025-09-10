import type {StatementsAbstractSyntaxTreeNodeChildren} from "./children/StatementsAbstractSyntaxTreeNodeChildren.ts";
import type {Statements} from "../../../../../statements/Statements.ts";
import {builtInFunctions} from "../../../built-in-functions/builtInFunctions.ts";
import type {Functions} from "../../../functions/Functions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {pickBfslyFromInfiniteGenerators} from "../functions/FunctionsAbstractSyntaxTreeNode.ts";
import {OperatedStatementAbstractSyntaxTreeNode} from "../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../operator/implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../operator/implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
import {BlockStatementAbstractSyntaxTreeNode} from "../statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import {FunctionCallStatementAbstractSyntaxTreeNode} from "../statement/implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export class StatementsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<StatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: StatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		functions: Functions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const [firstOperatedStatement, ...restInitialOperatedStatements] =
			this.children.initialOperatedStatements;
		if (firstOperatedStatement === undefined) {
			const finalStatementExecutingResults =
				this.children.finalStatement.execute(functions, variables);
			for (const finalStatementExecutingResult of finalStatementExecutingResults) {
				switch (finalStatementExecutingResult.typeName) {
					case stepStatementExecutingResultTypeName: {
						yield finalStatementExecutingResult;
						break;
					}
					case successStatementExecutingResultTypeName: {
						yield finalStatementExecutingResult;
						break;
					}
					case returnStatementExecutingResultTypeName: {
						const newVariables: Variables =
							finalStatementExecutingResult.data.variables;
						const combinedVariables: Variables = {
							...variables,
							...newVariables,
						};
						const statementsExecutingResult =
							new ReturnStatementExecutingResult(combinedVariables);
						yield statementsExecutingResult;
						break;
					}
					case failureStatementExecutingResultTypeName: {
						yield finalStatementExecutingResult;
						break;
					}
				}
			}
		} else {
			const firstOperatedStatementExecutingResults =
				firstOperatedStatement.execute(
					functions,
					// {
					// 	finalStatement: this.children.finalStatement,
					// 	initialOperatedStatements: restInitialOperatedStatements,
					// },
					new StatementsAbstractSyntaxTreeNode(
						{
							finalStatement: this.children.finalStatement,
							initialOperatedStatements: restInitialOperatedStatements,
						},
						// TODO: fix
						new SpanIndexes(0, 0),
					),
					variables,
				);
			yield* firstOperatedStatementExecutingResults;
		}
	}
	public *mutate(
		functions: Functions,
	): Generator<StatementsAbstractSyntaxTreeNode, void, void> {
		const [firstInitialOperatedStatement, ...restInitialOperatedStatements] =
			this.children.initialOperatedStatements;
		if (firstInitialOperatedStatement === undefined) {
			for (const mutatedFinalStatement of this.children.finalStatement.mutate(
				functions,
			)) {
				yield new StatementsAbstractSyntaxTreeNode(
					{
						finalStatement: mutatedFinalStatement,
						initialOperatedStatements: [],
					},
					this.spanIndexes,
				);
			}
		} else {
			const children = this.children;
			yield* pickBfslyFromInfiniteGenerators(
				(function* () {
					for (const mutatedFirstInitialOperatedStatement of firstInitialOperatedStatement.mutate(
						functions,
					)) {
						yield new StatementsAbstractSyntaxTreeNode(
							{
								finalStatement: children.finalStatement,
								initialOperatedStatements: [
									mutatedFirstInitialOperatedStatement,
									...restInitialOperatedStatements,
								],
							},
							new SpanIndexes(0, 0),
						);
					}
				})(),
				(function* () {
					const restStatements = new StatementsAbstractSyntaxTreeNode(
						{
							finalStatement: children.finalStatement,
							initialOperatedStatements: restInitialOperatedStatements,
						},
						new SpanIndexes(0, 0),
					);
					for (const mutatedRestStatements of restStatements.mutate(
						functions,
					)) {
						yield new StatementsAbstractSyntaxTreeNode(
							{
								finalStatement: mutatedRestStatements.children.finalStatement,
								initialOperatedStatements: [
									firstInitialOperatedStatement,
									...mutatedRestStatements.children.initialOperatedStatements,
								],
							},
							new SpanIndexes(0, 0),
						);
					}
				})(),
			);
		}
	}
}
