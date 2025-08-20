import type {WordFunctionCallSegmentAbstractSyntaxTreeNodeData} from "./data/WordFunctionCallSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData} from "../word-function-header-segment/data/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData.ts";
export class WordFunctionCallSegmentAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: WordFunctionCallSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public idify(): string {
		return this.data.word;
	}
}
