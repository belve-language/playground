import type {WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
