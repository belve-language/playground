import type {VariableNameConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const variableNameSegments = this.atom.node;
		const variableNameSegmentsAbstractifyingResult =
			variableNameSegments.abstractify();
		switch (variableNameSegmentsAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedVariableNameSegments =
					variableNameSegmentsAbstractifyingResult.data;
				const abstractifiedVariableName: string =
					abstractifiedVariableNameSegments.join(" ");
				const variableNameAbstractifyingResult: SuccessAbstractifyingResult<string> =
					new SuccessAbstractifyingResult<string>(abstractifiedVariableName);
				return variableNameAbstractifyingResult;
			}
		}
	}
}
