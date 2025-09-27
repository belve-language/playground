import {thenOperatorCharacter} from "../../../character/implementations/operator/implementations/then/thenOperatorCharacter.ts";
import {ThenOperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/then-operator/ThenOperatorConcreteSyntaxTreeNode.ts";
import type {ThenOperatorConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/then-operator/atom/ThenOperatorConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {thenOperatorRuleName} from "./name/thenOperatorRuleName.ts";
export class ThenOperatorRule extends Rule<
	ThenOperatorConcreteSyntaxTreeNodeAtom,
	ThenOperatorConcreteSyntaxTreeNode
> {
	public constructor() {
		super(thenOperatorRuleName);
	}
	public override buildNode(
		atom: ThenOperatorConcreteSyntaxTreeNodeAtom,
	): ThenOperatorConcreteSyntaxTreeNode {
		const node = new ThenOperatorConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof thenOperatorCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof thenOperatorCharacter>,
		] = [
			new TerminalExpression<typeof thenOperatorCharacter>(
				thenOperatorCharacter,
			),
		];
		return rightExpressions;
	}
}
