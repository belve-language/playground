import {WhitespaceCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace-character/WhitespaceCharacterConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/whitespace-character/atom/WhitespaceCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WhitespaceCharacterRule extends Rule<WhitespaceCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super("WhitespaceCharacter");
	}
	public override buildNode(
		atom: WhitespaceCharacterConcreteSyntaxTreeNodeAtom,
	): WhitespaceCharacterConcreteSyntaxTreeNode {
		const node = new WhitespaceCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		TerminalExpression<" ">,
		TerminalExpression<"\n">,
		TerminalExpression<"\t">,
	] {
		const rightExpressions: readonly [
			TerminalExpression<" ">,
			TerminalExpression<"\n">,
			TerminalExpression<"\t">,
		] = [
			new TerminalExpression(" "),
			new TerminalExpression("\n"),
			new TerminalExpression("\t"),
		];
		return rightExpressions;
	}
}
