import type {WordConcreteSyntaxTreeNodeAtom} from "./atom/WordConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class WordConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const wordCharacters = this.atom.node;
		const wordCharactersAbstractifyingResult = wordCharacters.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWordCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedWord: string = abstractifiedWordCharacters;
				const wordAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(abstractifiedWord);
				return wordAbstractifyingResult;
			}
		}
	}
}
