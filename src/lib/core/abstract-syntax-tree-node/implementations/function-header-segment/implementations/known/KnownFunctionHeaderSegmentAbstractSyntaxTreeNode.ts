import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): KnownFunctionHeaderSegmentAbstractSyntaxTreeNode {
		const node = new this(children, "()", children.name, spanIndexes);
		return node;
	}
	private constructor(
		children: KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		id: string,
		name: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, id, spanIndexes);
		this.name = name;
	}
	public readonly name: string;
}
