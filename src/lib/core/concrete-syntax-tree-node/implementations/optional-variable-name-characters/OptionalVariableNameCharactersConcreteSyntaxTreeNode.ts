import type {OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../abstractifying/result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
export class OptionalVariableNameCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<null | string> {
		const wordCharacters = this.atom.node;
		const wordCharactersAbstractifyingResult = wordCharacters.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedOptionalVariableNameCharacters: null | string =
					abstractifiedVariableNameCharacters;
				const optionalVariableNameCharactersAbstractifyingResult: SuccessAbstractifyingResult<
					null | string
				> = new SuccessAbstractifyingResult<null | string>(
					abstractifiedOptionalVariableNameCharacters,
				);
				return optionalVariableNameCharactersAbstractifyingResult;
			}
		}
	}
}
