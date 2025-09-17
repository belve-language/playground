import type {OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<null | string> {
		const wordCharacters = this.atom.node;
		const wordCharactersAbstractifyingResult = wordCharacters.abstractify();
		switch (wordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameSegmentCharacters =
					wordCharactersAbstractifyingResult.data;
				const abstractifiedOptionalVariableNameSegmentCharacters:
					| null
					| string = abstractifiedVariableNameSegmentCharacters;
				const optionalVariableNameSegmentCharactersAbstractifyingResult: SuccessAbstractifyingResult<
					null | string
				> = new SuccessAbstractifyingResult<null | string>(
					abstractifiedOptionalVariableNameSegmentCharacters,
				);
				return optionalVariableNameSegmentCharactersAbstractifyingResult;
			}
		}
	}
}
