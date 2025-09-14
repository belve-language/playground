import type {StatementsAbstractSyntaxTreeNodeChildren} from "./children/StatementsAbstractSyntaxTreeNodeChildren.ts";
import type {Functions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export class StatementsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<StatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: StatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		nonMainFunctions: NonMainFunctions,
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
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<StatementsAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
	public scanSetUnknowns(
		unknownsToSetNames: ReadonlySet<string>,
	): ReadonlySet<string> {
		const unknownsToSetNamesAfterInitialOperatedStatements =
			this.children.initialOperatedStatements.reduce<ReadonlySet<string>>(
				(
					accumulatedUnknownsToSetNamesAfterInitialOperatedStatements,
					operatedStatement,
				) => {
					return operatedStatement.scanSetUnknowns(
						accumulatedUnknownsToSetNamesAfterInitialOperatedStatements,
					);
				},
				unknownsToSetNames,
			);
		const unknownsToSetNamesAfterFinalStatement =
			this.children.finalStatement.scanSetUnknowns(
				unknownsToSetNamesAfterInitialOperatedStatements,
			);
		return unknownsToSetNamesAfterFinalStatement;
	}
	public stringify(indentationLevel: number): string {
		return `${this.children.initialOperatedStatements
			.map((statement) => {
				return `${statement.stringify(indentationLevel)}\n`;
			})
			.join("")}${this.children.finalStatement.stringify(indentationLevel)}\n`;
	}
}
