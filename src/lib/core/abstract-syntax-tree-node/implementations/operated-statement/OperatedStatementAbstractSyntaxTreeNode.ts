import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {Statements} from "../../../../../statements/Statements.ts";
import type {Functions} from "../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class OperatedStatementAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<OperatedStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: OperatedStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		functions: Functions,
		restStatements: Statements,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const thisStatement = this.children.statement;
		const thisStatementExecutingResults = this.children.operator.operate(
			thisStatement,
			functions,
			restStatements,
			variables,
		);
		yield* thisStatementExecutingResults;
	}
}
