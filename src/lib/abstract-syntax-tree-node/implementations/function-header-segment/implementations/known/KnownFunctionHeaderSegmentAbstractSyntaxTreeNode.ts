import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
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
