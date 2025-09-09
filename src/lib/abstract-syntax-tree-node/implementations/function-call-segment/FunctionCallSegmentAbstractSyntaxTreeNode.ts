import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export abstract class FunctionCallSegmentAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	public constructor(children: Children, id: string, spanIndexes: SpanIndexes) {
		super(children, spanIndexes);
		this.id = id;
	}
	public readonly id: string;
}
