import type {WordConcreteSyntaxTreeNodeAtom} from "./atom/WordConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class WordConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const wordCharactersAbstractifyingResult = this.atom.node.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWordCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedWord: string = abstractifiedWordCharacters;
				return abstractifiedWord;
			}
		}
	}
}
