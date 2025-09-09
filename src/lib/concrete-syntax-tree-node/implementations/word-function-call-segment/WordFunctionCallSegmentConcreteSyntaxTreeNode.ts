import type {WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "./atom/WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-segment/implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordFunctionCallSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): WordFunctionCallSegmentAbstractSyntaxTreeNode {
		const word = this.atom.node;
		const abstractifiedWord = word.abstractify();
		const abstractifiedWordFunctionCallSegment =
			WordFunctionCallSegmentAbstractSyntaxTreeNode.create(
				{word: abstractifiedWord},
				word.atom.spanIndexes,
			);
		return abstractifiedWordFunctionCallSegment;
	}
}
