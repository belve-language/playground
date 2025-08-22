import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override computeId(): string {
		return this.children.word;
	}
}
