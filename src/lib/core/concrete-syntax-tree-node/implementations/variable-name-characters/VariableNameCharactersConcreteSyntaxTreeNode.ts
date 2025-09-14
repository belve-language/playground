import type {VariableNameCharactersConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const wordCharacter = this.atom.leftSubAtom.node;
		const optionalVariableNameCharacters = this.atom.rightSubAtom.node;
		const abstractifiedVariableNameCharacter = wordCharacter.abstractify();
		const optionalVariableNameCharactersAbstractifyingResult =
			optionalVariableNameCharacters.abstractify();
		switch (optionalVariableNameCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalVariableNameCharacters =
					optionalVariableNameCharactersAbstractifyingResult.data;
				if (abstractifiedOptionalVariableNameCharacters === null) {
					const abstractifiedVariableNameCharacters: string =
						abstractifiedVariableNameCharacter;
					const variableNameCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedVariableNameCharacters,
						);
					return variableNameCharactersAbstractifyingResult;
				} else {
					const abstractifiedVariableNameCharacters: string = `${abstractifiedVariableNameCharacter}${abstractifiedOptionalVariableNameCharacters}`;
					const variableNameCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedVariableNameCharacters,
						);
					return variableNameCharactersAbstractifyingResult;
				}
			}
		}
	}
}
