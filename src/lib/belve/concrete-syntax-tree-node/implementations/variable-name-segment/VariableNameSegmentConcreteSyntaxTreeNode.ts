import type {VariableNameSegmentConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameSegmentConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		const variableNameSegmentCharacters = this.atom.node;
		const abstractifiedVariableNameSegmentCharacters =
			variableNameSegmentCharacters.abstractify();
		const abstractifiedVariableNameSegment: string =
			abstractifiedVariableNameSegmentCharacters;
		return abstractifiedVariableNameSegment;
	}
}
