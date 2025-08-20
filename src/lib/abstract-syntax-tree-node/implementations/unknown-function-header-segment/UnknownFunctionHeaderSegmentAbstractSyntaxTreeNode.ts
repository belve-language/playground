import type {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeData} from "./data/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public getVariableName(): string {
		return this.data.variableName;
	}
	public idfy(): string {
		return "[]";
	}
}
