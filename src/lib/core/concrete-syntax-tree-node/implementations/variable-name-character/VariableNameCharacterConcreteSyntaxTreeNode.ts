import type {VariableNameCharacterConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameCharacterConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const abstractifiedVariableName: string = this.atom.character;
		return abstractifiedVariableName;
	}
}
