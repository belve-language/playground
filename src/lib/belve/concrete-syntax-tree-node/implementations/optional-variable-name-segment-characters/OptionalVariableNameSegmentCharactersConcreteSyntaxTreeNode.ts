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
		const variableNameSegmentCharacters = this.atom.node;
		const variableNameSegmentCharactersAbstractifyingResult =
			variableNameSegmentCharacters.abstractify();
		switch (variableNameSegmentCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameSegmentCharacters =
					variableNameSegmentCharactersAbstractifyingResult.data;
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
