import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode {
		const node = new this(children, "[]", children.name, spanIndexes);
		return node;
	}
	private constructor(
		children: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		id: string,
		name: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, id, spanIndexes);
		this.name = name;
	}
	public readonly name: string;
	public stringify(): string {
		return `[${this.name}]`;
	}
}
