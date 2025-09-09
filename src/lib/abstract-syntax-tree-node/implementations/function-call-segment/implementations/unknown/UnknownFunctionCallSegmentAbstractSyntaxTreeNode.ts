import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): UnknownFunctionCallSegmentAbstractSyntaxTreeNode {
		const node = new this(children, children.name, spanIndexes);
		return node;
	}
	private constructor(
		children: UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		name: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, "[]", spanIndexes);
		this.name = name;
	}
	public readonly name: string;
}
