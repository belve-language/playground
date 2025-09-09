import type {OptionalWordCharactersConcreteSyntaxTreeNodeAtom} from "./atom/OptionalWordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {ErrorAbstractifyingResult} from "../../abstractifying/result/implementations/error/ErrorAbstractifyingResult.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalWordCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalWordCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalWordCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): null | string {
		const wordCharacters = this.atom.node;
		const wordCharactersAbstractifyingResult = wordCharacters.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWordCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedOptionalWordCharacters: null | string =
					abstractifiedWordCharacters;
				return abstractifiedOptionalWordCharacters;
			}
		}
	}
}
