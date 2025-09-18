import type {WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "./atom/WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import {WordFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/function-call-statement-segment/implementations/word/WordFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordFunctionCallStatementSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): WordFunctionCallStatementSegmentAbstractSyntaxTreeNode {
		const word = this.atom.node;
		const wordAbstractifyingResult = word.abstractify();
		switch (wordAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWord = wordAbstractifyingResult.data;
				const abstractifiedWordFunctionCallStatementSegment: WordFunctionCallStatementSegmentAbstractSyntaxTreeNode =
					new WordFunctionCallStatementSegmentAbstractSyntaxTreeNode(
						{word: abstractifiedWord},
						word.atom.spanIndexes,
					);
				return abstractifiedWordFunctionCallStatementSegment;
			}
		}
	}
}
