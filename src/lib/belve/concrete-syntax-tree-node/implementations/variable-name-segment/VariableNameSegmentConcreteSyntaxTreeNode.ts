import type {VariableNameSegmentConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentConcreteSyntaxTreeNodeAtom.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameSegmentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const variableNameSegmentCharacters = this.atom.node;
		const variableNameSegmentCharactersAbstractifyingResult =
			variableNameSegmentCharacters.abstractify();
		switch (variableNameSegmentCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameSegmentCharacters =
					variableNameSegmentCharactersAbstractifyingResult.data;
				const abstractifiedVariableNameSegment: string =
					abstractifiedVariableNameSegmentCharacters;
				return abstractifiedVariableNameSegment;
			}
		}
	}
}
