import type {WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public static create(
		children: WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	): WordFunctionHeaderSegmentAbstractSyntaxTreeNode {
		const node = new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
			children,
			children.word,
			spanIndexes,
		);
		return node;
	}
	private constructor(
		children: WordFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		id: string,
		spanIndexes: SpanIndexes,
	) {
		super(children, id, spanIndexes);
	}
}
