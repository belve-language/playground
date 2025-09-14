import type {FunctionCallStatementAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallStatementAbstractSyntaxTreeNodeChildren.ts";
import {computeUnknowns} from "./computing-unknowns/computeUnknowns.ts";
import {returnFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/return/type-name/returnFunctionCallingResultTypeName.ts";
import {stepFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/step/type-name/stepFunctionCallingResultTypeName.ts";
import {successFunctionCallingResultTypeName} from "../../../../../function-calling-result/implementations/success/type-name/successFunctionCallingResultTypeName.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
import {computeId} from "./computing-id/computeId.ts";
import {computeKnownsNames} from "./computing-knowns-names/computeKnownsNames.ts";
import {computeKnownsValues} from "./computing-knowns-values/computeKnownsValues.ts";
import {computeUnknownsNames} from "./computing-unknowns-names/computeUnknownsNames.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {SuccessStatementExecutingResult} from "../../../../../statement-executing-result/implementations/success/SuccessStatementExecutingResult.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export class FunctionCallStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<FunctionCallStatementAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: FunctionCallStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): FunctionCallStatementAbstractSyntaxTreeNode {
		const id = computeId(children.segments);
		const knownsNames = computeKnownsNames(children.segments);
		const unknownsNames = computeUnknownsNames(children.segments);
		const node = new this(
			children,
			id,
			knownsNames,
			spanIndexes,
			unknownsNames,
		);
		return node;
	}
	private constructor(
		children: FunctionCallStatementAbstractSyntaxTreeNodeChildren,
		id: string,
		knownsNames: readonly string[],
		spanIndexes: SpanIndexes,
		unknownsNames: readonly string[],
	) {
		super(children, spanIndexes);
		this.id = id;
		this.knownsNames = knownsNames;
		this.unknownsNames = unknownsNames;
	}
	public override *execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		yield new StepStatementExecutingResult(this, variables);
		const function_ = nonMainFunctions[this.id];
		if (function_ === undefined) {
			throw new Error(`Function "${this.id}" not found.`);
		} else {
			const knownsValues = computeKnownsValues(this.knownsNames, variables);
			const functionCallingResults = function_.call(
				nonMainFunctions,
				knownsValues,
			);
			let hasFailed = true;
			for (const functionCallingResult of functionCallingResults) {
				switch (functionCallingResult.typeName) {
					case stepFunctionCallingResultTypeName: {
						const statementExecutingResult = new StepStatementExecutingResult(
							functionCallingResult.data.node,
							functionCallingResult.data.variables,
						);
						yield statementExecutingResult;
						break;
					}
					case successFunctionCallingResultTypeName: {
						const statementExecutingResult =
							new SuccessStatementExecutingResult(
								functionCallingResult.data.node,
								functionCallingResult.data.variables,
							);
						yield statementExecutingResult;
						break;
					}
					case returnFunctionCallingResultTypeName: {
						hasFailed = false;
						const unknowns: Variables = computeUnknowns(
							this.unknownsNames,
							functionCallingResult.data.unknownsValues,
						);
						const statementExecutingResult = new ReturnStatementExecutingResult(
							unknowns,
						);
						const combinedVariables: Variables = {...variables, ...unknowns};
						yield new SuccessStatementExecutingResult(this, combinedVariables);
						yield statementExecutingResult;
						break;
					}
					case failureStatementExecutingResultTypeName: {
						const statementExecutingResult =
							new FailureStatementExecutingResult(
								functionCallingResult.data.node,
								functionCallingResult.data.variables,
							);
						yield statementExecutingResult;
						break;
					}
				}
			}
			if (hasFailed) {
				yield new FailureStatementExecutingResult(this, variables);
			}
		}
	}
	private readonly id: string;
	private readonly knownsNames: readonly string[];
	public override *mutate(
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<FunctionCallStatementAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
	private readonly unknownsNames: readonly string[];
}
