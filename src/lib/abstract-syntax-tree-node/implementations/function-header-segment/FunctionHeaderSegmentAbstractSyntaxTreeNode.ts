import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export abstract class FunctionHeaderSegmentAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	public constructor(children: Children, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
	}
	public abstract computeId(): string;
}
