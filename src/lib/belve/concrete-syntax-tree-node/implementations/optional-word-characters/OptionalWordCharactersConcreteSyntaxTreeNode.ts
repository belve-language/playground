import type {OptionalWordCharactersConcreteSyntaxTreeNodeAtom} from "./atom/OptionalWordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalWordCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalWordCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalWordCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<null | string> {
		const wordCharacters = this.atom.node;
		const wordCharactersAbstractifyingResult = wordCharacters.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedWordCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedOptionalWordCharacters: null | string =
					abstractifiedWordCharacters;
				const optionalWordCharactersAbstractifyingResult: SuccessAbstractifyingResult<
					null | string
				> = new SuccessAbstractifyingResult<null | string>(
					abstractifiedOptionalWordCharacters,
				);
				return optionalWordCharactersAbstractifyingResult;
			}
		}
	}
}
