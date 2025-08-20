import type {KnownFunctionCallSegmentAbstractSyntaxTreeNodeData} from "./data/KnownFunctionCallSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../function-call-segment/FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<KnownFunctionCallSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: KnownFunctionCallSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public getVariableName(): string {
		return this.data.variableName;
	}
	public idfy(): string {
		return "()";
	}
}
