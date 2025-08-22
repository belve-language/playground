import type {KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override computeId(): "()" {
		return "()";
	}
	public getVariableName(): string {
		return this.children.name;
	}
}
