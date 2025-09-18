import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export abstract class FunctionHeaderSegmentAbstractSyntaxTreeNode<
	Children,
> extends AbstractSyntaxTreeNode<Children> {
	protected constructor(
		children: Children,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
		this.id = id;
	}
	public readonly id: string;
}
