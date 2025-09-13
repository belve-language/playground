import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "./children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
import {stepStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {SuccessStatementExecutingResult} from "../../../../../statement-executing-result/implementations/success/SuccessStatementExecutingResult.ts";
import {successStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../../../statements/StatementsAbstractSyntaxTreeNode.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
export class BlockStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<BlockStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *execute(
		functions: Functions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		yield new StepStatementExecutingResult(this, variables);
		const statements: StatementsAbstractSyntaxTreeNode =
			this.children.statements;
		const statementsExecutingResults = statements.execute(functions, variables);
		let hasFailed = true;
		for (const statementsExecutingResult of statementsExecutingResults) {
			switch (statementsExecutingResult.typeName) {
				case stepStatementExecutingResultTypeName: {
					yield statementsExecutingResult;
					break;
				}
				case successStatementExecutingResultTypeName: {
					yield statementsExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					hasFailed = false;
					yield new SuccessStatementExecutingResult(
						this,
						statementsExecutingResult.data.variables,
					);
					yield statementsExecutingResult;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					yield statementsExecutingResult;
					break;
				}
			}
		}
		if (hasFailed) {
			yield new FailureStatementExecutingResult(this, variables);
		}
	}
	public override *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<BlockStatementAbstractSyntaxTreeNode, void, void> {
		for (const mutatedStatements of this.children.statements.mutate(
			functionsHeaders,
			unknownsNames,
			userVariablesNames,
		)) {
			const mutatedBlockStatement = new BlockStatementAbstractSyntaxTreeNode(
				{statements: mutatedStatements},
				new SpanIndexes(0, 0),
			);
			yield mutatedBlockStatement;
		}
	}
	public override scanSetUnknowns(
		unknownsNamesToSet: ReadonlySet<string>,
	): ReadonlySet<string> {
		return this.children.statements.scanSetUnknowns(unknownsNamesToSet);
	}
	public stringify(indentationLevel: number): string {
		const indentation = "\t".repeat(indentationLevel);
		return `${indentation}{\n${this.children.statements.stringify(
			indentationLevel + 1,
		)}${indentation}}`;
	}
}
