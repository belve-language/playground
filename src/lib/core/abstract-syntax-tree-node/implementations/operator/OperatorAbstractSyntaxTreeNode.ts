import type {Statements} from "../../../../../statements/Statements.ts";
import type {Functions} from "../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
// TODO: REMOVE null, get rid of children
export abstract class OperatorAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<null> {
	public constructor(spanIndexes: SpanIndexes) {
		super(null, spanIndexes);
	}
	public abstract operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		functions: Functions,
		restStatements: Statements,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
}
