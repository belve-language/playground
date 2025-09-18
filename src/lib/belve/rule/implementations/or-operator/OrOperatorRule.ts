import {orOperatorRuleName} from "./name/orOperatorRuleName.ts";
import {orOperatorCharacter} from "../../../character/implementations/operator/implementations/or/orOperatorCharacter.ts";
import {OrOperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/or-operator/OrOperatorConcreteSyntaxTreeNode.ts";
import type {OrOperatorConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/or-operator/atom/OrOperatorConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OrOperatorRule extends Rule<
	OrOperatorConcreteSyntaxTreeNodeAtom,
	OrOperatorConcreteSyntaxTreeNode
> {
	public constructor() {
		super(orOperatorRuleName);
	}
	public override buildNode(
		atom: OrOperatorConcreteSyntaxTreeNodeAtom,
	): OrOperatorConcreteSyntaxTreeNode {
		const node = new OrOperatorConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof orOperatorCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof orOperatorCharacter>,
		] = [
			new TerminalExpression<typeof orOperatorCharacter>(orOperatorCharacter),
		];
		return rightExpressions;
	}
}
