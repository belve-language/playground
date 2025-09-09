import type {PaddedVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/PaddedVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
export class PaddedVariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<PaddedVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: PaddedVariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const variableName = this.atom.leftSubAtom.node;
		const optionalWhitespace = this.atom.rightSubAtom.node;
		const abstractifiedVariableName = variableName.abstractify();
		const abstractifiedPaddedVariableName: string = abstractifiedVariableName;
		const result = new SuccessAbstractifyingResult(
			abstractifiedPaddedVariableName,
		);
		return result;
	}
}
