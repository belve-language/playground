import type {WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
