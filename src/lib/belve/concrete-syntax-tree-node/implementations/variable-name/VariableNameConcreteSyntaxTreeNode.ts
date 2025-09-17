import type {VariableNameConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const variableNameSegments = this.atom.node;
		const abstractifiedVariableNameSegments =
			variableNameSegments.abstractify();
		const abstractifiedVariableName: string = abstractifiedVariableNameSegments;
		return abstractifiedVariableName;
	}
}
