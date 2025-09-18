import type {OrOperatorConcreteSyntaxTreeNodeAtom} from "./atom/OrOperatorConcreteSyntaxTreeNodeAtom.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/implementations/or/OrOperatorAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OrOperatorConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OrOperatorConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OrOperatorConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): OrOperatorAbstractSyntaxTreeNode {
		const abstractifiedOrOperator: OrOperatorAbstractSyntaxTreeNode =
			new OrOperatorAbstractSyntaxTreeNode(this.atom.spanIndexes);
		return abstractifiedOrOperator;
	}
}
