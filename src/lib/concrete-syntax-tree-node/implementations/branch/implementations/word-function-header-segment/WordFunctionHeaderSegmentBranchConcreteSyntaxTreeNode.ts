import type {WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
export class WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
