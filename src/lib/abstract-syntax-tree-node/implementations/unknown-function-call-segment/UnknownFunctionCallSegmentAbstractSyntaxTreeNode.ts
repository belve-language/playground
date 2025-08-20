import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNodeData} from "./data/UnknownFunctionCallSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<UnknownFunctionCallSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: UnknownFunctionCallSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public getVariableName(): string {
		return this.data.variableName;
	}
	public idify(): string {
		return "[]";
	}
}
