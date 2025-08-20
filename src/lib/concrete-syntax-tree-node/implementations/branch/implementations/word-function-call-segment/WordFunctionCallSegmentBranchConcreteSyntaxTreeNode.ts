import type {WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
export class WordFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
