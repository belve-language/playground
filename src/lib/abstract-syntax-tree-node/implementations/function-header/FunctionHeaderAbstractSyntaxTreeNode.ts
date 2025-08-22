import type {FunctionHeaderAbstractSyntaxTreeNodeChildren} from "./children/FunctionHeaderAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class FunctionHeaderAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<FunctionHeaderAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionHeaderAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public computeId(): string {
		const id = this.children.segments
			.map((segment) => {
				const segmentId = segment.computeId();
				return segmentId;
			})
			.join(" ");
		return id;
	}
	public extractKnownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
	public extractUnknownsNames(): readonly string[] {
		return this.children.segments
			.filter((segment) => {
				return (
					segment instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
				);
			})
			.map((segment) => {
				const name = segment.getVariableName();
				return name;
			});
	}
}
