import type {BlockAbstractSyntaxTreeNodeChildren} from "./children/BlockAbstractSyntaxTreeNodeChildren.ts";
import {executeStatements} from "./executing-statements/executeStatements.ts";
import type {Statements} from "../../../../../../statements/Statements.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
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
		yield new StepStatementExecutingResult(this);
		const statements: Statements = this.children.statements;
		const statementsExecutingResults = executeStatements(
			functions,
			variables,
			statements,
		);
		yield* statementsExecutingResults;
	}
}
