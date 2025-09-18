import type {OperatorConcreteSyntaxTreeNodeAtom} from "./atom/OperatorConcreteSyntaxTreeNodeAtom.ts";
import type {SupportedOperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OperatorConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OperatorConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OperatorConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SupportedOperatorAbstractSyntaxTreeNode {
		const implementationOperator = this.atom.node;
		const abstractifiedImplementationOperator =
			implementationOperator.abstractify();
		const abstractifiedOperator: SupportedOperatorAbstractSyntaxTreeNode =
			abstractifiedImplementationOperator;
		return abstractifiedOperator;
	}
}
