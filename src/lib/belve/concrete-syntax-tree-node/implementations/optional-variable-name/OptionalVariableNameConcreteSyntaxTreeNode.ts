import type {OptionalVariableNameConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalVariableNameSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalVariableNameConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
