import type {OperatorConcreteSyntaxTreeNodeAtom} from "./atom/OperatorConcreteSyntaxTreeNodeAtom.ts";
import type {OperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/OperatorAbstractSyntaxTreeNode.ts";
import type {SupportedOperatorAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/operator/supported/SupportedOperatorAbstractSyntaxTreeNode.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OperatorConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OperatorConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OperatorConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<SupportedOperatorAbstractSyntaxTreeNode> {
		const implementationOperator = this.atom.node;
		const abstractifiedImplementationOperator =
			implementationOperator.abstractify();
		const abstractifiedOperator: SupportedOperatorAbstractSyntaxTreeNode =
			abstractifiedImplementationOperator;
		const operatorAbstractifyingResult: SuccessAbstractifyingResult<SupportedOperatorAbstractSyntaxTreeNode> =
			new SuccessAbstractifyingResult<SupportedOperatorAbstractSyntaxTreeNode>(
				abstractifiedOperator,
			);
		return operatorAbstractifyingResult;
	}
}
