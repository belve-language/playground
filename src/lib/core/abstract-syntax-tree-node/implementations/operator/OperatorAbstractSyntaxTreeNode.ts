import type {Functions} from "../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../statements/StatementsAbstractSyntaxTreeNode.ts";
import type {SupportedOperatorAbstractSyntaxTreeNode} from "./supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
// TODO: REMOVE null, get rid of children
export abstract class OperatorAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<null> {
	public constructor(spanIndexes: SpanIndexes) {
		super(null, spanIndexes);
	}
	public abstract mutate(): Generator<
		SupportedOperatorAbstractSyntaxTreeNode,
		void,
		void
	>;
	public abstract operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		functions: Functions,
		restStatements: StatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void>;
}
