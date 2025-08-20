import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData} from "./data/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../function-header-segment/FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData> {
	public constructor(
		data: WordFunctionHeaderSegmentAbstractSyntaxTreeNodeData,
		spanIndexes: SpanIndexes,
	) {
		super(data, spanIndexes);
	}
	public idfy(): string {
		return this.data.word;
	}
}
