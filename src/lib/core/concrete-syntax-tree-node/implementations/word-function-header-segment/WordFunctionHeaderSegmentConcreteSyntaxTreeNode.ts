import type {WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "./atom/WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import {WordFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-header-segment/implementations/word/WordFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordFunctionHeaderSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): WordFunctionHeaderSegmentAbstractSyntaxTreeNode {
		const word = this.atom.node;
		const wordAbstractifyingResult = word.abstractify();
		switch (wordAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWord = wordAbstractifyingResult.data;
				const abstractifiedWordFunctionHeaderSegment =
					WordFunctionHeaderSegmentAbstractSyntaxTreeNode.create(
						{word: abstractifiedWord},
						word.atom.spanIndexes,
					);
				return abstractifiedWordFunctionHeaderSegment;
			}
		}
	}
}
