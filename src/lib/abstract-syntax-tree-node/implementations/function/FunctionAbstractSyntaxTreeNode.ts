import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class FunctionAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
}
