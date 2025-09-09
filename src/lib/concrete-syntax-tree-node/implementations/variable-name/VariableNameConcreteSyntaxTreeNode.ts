import type {VariableNameConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const word = this.atom.node;
		const abstractifiedWord = word.abstractify();
		const abstractifiedVariableName: string = abstractifiedWord;
		return abstractifiedVariableName;
	}
}
