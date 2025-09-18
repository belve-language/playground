import type {VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {Character} from "../../../character/Character.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const variableNameSegmentCharacter = this.atom.leftSubAtom.node;
		const optionalVariableNameSegmentCharacters = this.atom.rightSubAtom.node;
		const abstractifiedVariableNameSegmentCharacter =
			variableNameSegmentCharacter.abstractify();
		const optionalVariableNameSegmentCharactersAbstractifyingResult =
			optionalVariableNameSegmentCharacters.abstractify();
		switch (
			optionalVariableNameSegmentCharactersAbstractifyingResult.typeName
		) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalVariableNameSegmentCharacters =
					optionalVariableNameSegmentCharactersAbstractifyingResult.data;
				if (abstractifiedOptionalVariableNameSegmentCharacters === null) {
					const abstractifiedVariableNameSegmentCharacters: Character =
						abstractifiedVariableNameSegmentCharacter;
					const variableNameSegmentCharactersAbstractifyingResult: SuccessAbstractifyingResult<Character> =
						new SuccessAbstractifyingResult<Character>(
							abstractifiedVariableNameSegmentCharacters,
						);
					return variableNameSegmentCharactersAbstractifyingResult;
				} else {
					const abstractifiedVariableNameSegmentCharacters: `${Character}${string}` = `${abstractifiedVariableNameSegmentCharacter}${abstractifiedOptionalVariableNameSegmentCharacters}`;
					const variableNameSegmentCharactersAbstractifyingResult: SuccessAbstractifyingResult<`${Character}${string}`> =
						new SuccessAbstractifyingResult<`${Character}${string}`>(
							abstractifiedVariableNameSegmentCharacters,
						);
					return variableNameSegmentCharactersAbstractifyingResult;
				}
			}
		}
	}
}
