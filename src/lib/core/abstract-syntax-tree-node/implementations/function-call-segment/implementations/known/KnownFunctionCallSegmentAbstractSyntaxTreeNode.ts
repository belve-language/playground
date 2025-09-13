import type {KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): KnownFunctionCallSegmentAbstractSyntaxTreeNode {
		const node = new this(children, children.name, spanIndexes);
		return node;
	}
	private constructor(
		children: KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		name: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, "()", spanIndexes);
		this.name = name;
	}
	public readonly name: string;
	public stringify(): string {
		return `(${this.name})`;
	}
}
