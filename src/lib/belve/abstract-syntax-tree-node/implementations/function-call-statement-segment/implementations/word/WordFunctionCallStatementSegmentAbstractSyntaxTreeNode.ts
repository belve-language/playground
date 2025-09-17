import type {WordFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren} from "./children/WordFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "../../../function-header-segment/implementations/word/children/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import {FunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../FunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionCallStatementSegmentAbstractSyntaxTreeNode extends FunctionCallStatementSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, children.word, spanIndexes);
	}
}
