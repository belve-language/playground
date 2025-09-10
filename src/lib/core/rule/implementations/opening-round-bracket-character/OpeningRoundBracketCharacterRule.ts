import {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket/atom/OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OpeningRoundBracketCharacterRule extends Rule<OpeningRoundBracketCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	): OpeningRoundBracketCharacterConcreteSyntaxTreeNode {
		const node = new OpeningRoundBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions = [new TerminalExpression("(")] as const;
		return rightExpressions;
	}
}
