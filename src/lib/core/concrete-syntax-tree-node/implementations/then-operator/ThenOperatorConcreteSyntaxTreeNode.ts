import type {ThenOperatorConcreteSyntaxTreeNodeAtom} from "./atom/ThenOperatorConcreteSyntaxTreeNodeAtom.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/implementations/then/ThenOperatorAbstractSyntaxTreeNode.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class ThenOperatorConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<ThenOperatorConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: ThenOperatorConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): ThenOperatorAbstractSyntaxTreeNode {
		const abstractifiedThenOperator: ThenOperatorAbstractSyntaxTreeNode =
			new ThenOperatorAbstractSyntaxTreeNode(this.atom.spanIndexes);
		return abstractifiedThenOperator;
	}
}
