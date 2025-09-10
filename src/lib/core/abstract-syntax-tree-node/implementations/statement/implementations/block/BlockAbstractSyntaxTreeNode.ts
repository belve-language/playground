import type {BlockAbstractSyntaxTreeNodeChildren} from "./children/BlockAbstractSyntaxTreeNodeChildren.ts";
import {executeStatements} from "./executing-statements/executeStatements.ts";
import type {Statements} from "../../../../../../../statements/Statements.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
import {stepStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {SuccessStatementExecutingResult} from "../../../../../statement-executing-result/implementations/success/SuccessStatementExecutingResult.ts";
import {successStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
export class BlockStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<BlockAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *execute(
		functions: Functions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		yield new StepStatementExecutingResult(this, variables);
		const statements: Statements = this.children.statements;
		const statementsExecutingResults = executeStatements(
			functions,
			variables,
			statements,
		);
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
}
