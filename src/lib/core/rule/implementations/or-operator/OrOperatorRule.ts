import {OrOperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/or-operator/OrOperatorConcreteSyntaxTreeNode.ts";
import type {OrOperatorConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/or-operator/atom/OrOperatorConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OrOperatorRule extends Rule<OrOperatorConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OrOperatorConcreteSyntaxTreeNodeAtom,
	): OrOperatorConcreteSyntaxTreeNode {
		const node = new OrOperatorConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions = [new TerminalExpression(".")] as const;
		return rightExpressions;
	}
}
