import type {WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			wordFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify(): WordFunctionHeaderSegmentAbstractSyntaxTreeNode {
		const node = new WordFunctionHeaderSegmentAbstractSyntaxTreeNode(
			{word: this.children[0].abstractify()},
			this.computeSpanIndexes(),
		);
		return node;
	}
}
