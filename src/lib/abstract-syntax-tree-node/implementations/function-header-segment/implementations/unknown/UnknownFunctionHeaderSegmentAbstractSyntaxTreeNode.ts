import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
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
