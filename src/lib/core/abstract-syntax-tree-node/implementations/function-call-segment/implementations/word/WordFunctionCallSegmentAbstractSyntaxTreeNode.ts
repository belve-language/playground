import type {WordFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/WordFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "../../../function-header-segment/implementations/word/children/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, children.word, spanIndexes);
	}
}
