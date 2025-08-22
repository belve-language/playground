import type {WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export class WordFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: WordFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(
			children,
			wordFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
	public abstractify(): WordFunctionCallSegmentAbstractSyntaxTreeNode {
		const node = new WordFunctionCallSegmentAbstractSyntaxTreeNode(
			{word: this.children[0].abstractify()},
			this.computeSpanIndexes(),
		);
		return node;
	}
}
