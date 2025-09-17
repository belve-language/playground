import type {VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
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
					const abstractifiedVariableNameSegmentCharacters: string =
						abstractifiedVariableNameSegmentCharacter;
					const variableNameSegmentCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedVariableNameSegmentCharacters,
						);
					return variableNameSegmentCharactersAbstractifyingResult;
				} else {
					const abstractifiedVariableNameSegmentCharacters: string = `${abstractifiedVariableNameSegmentCharacter}${abstractifiedOptionalVariableNameSegmentCharacters}`;
					return new SuccessAbstractifyingResult<string>(
						abstractifiedVariableNameSegmentCharacters,
					);
				}
			}
		}
	}
}
