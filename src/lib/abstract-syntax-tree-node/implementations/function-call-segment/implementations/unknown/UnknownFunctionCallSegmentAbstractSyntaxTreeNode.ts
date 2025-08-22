import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override computeId(): "[]" {
		return "[]";
	}
	public getVariableName(): string {
		return this.children.name;
	}
}
