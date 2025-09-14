import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	private constructor(
		children: WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, children.word, spanIndexes);
	}
}
