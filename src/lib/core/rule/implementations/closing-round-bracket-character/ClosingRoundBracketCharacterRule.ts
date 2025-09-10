import {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/closing-round-bracket/atom/ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ClosingRoundBracketCharacterRule extends Rule<ClosingRoundBracketCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super("ClosingRoundBracketCharacter");
	}
	public override buildNode(
		atom: ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	): ClosingRoundBracketCharacterConcreteSyntaxTreeNode {
		const node = new ClosingRoundBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions = [new TerminalExpression(")")] as const;
		return rightExpressions;
	}
}
