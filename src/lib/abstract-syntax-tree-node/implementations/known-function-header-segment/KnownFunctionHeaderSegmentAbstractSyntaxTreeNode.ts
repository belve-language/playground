import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeData} from "./data/KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public getVariableName(): string {
		return this.data.variableName;
	}
	public idify(): string {
		return "()";
	}
}
