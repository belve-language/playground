import type {VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
	public abstractify(): string {
		const abstractifiedVariableName: string = this.atom.character;
		return abstractifiedVariableName;
	}
}
