import type {StatementsAbstractSyntaxTreeNodeChildren} from "./children/StatementsAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class StatementsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<StatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: StatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
