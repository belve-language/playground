import type {FunctionsAbstractSyntaxTreeNodeChildren} from "./children/FunctionsAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class FunctionsAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
