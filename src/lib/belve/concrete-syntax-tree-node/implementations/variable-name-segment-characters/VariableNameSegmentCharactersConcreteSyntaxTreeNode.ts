import type {VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): string {
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
					return abstractifiedVariableNameSegmentCharacters;
				} else {
					const abstractifiedVariableNameSegmentCharacters: string = `${abstractifiedVariableNameSegmentCharacter}${abstractifiedOptionalVariableNameSegmentCharacters}`;
					return abstractifiedVariableNameSegmentCharacters;
				}
			}
		}
	}
}
