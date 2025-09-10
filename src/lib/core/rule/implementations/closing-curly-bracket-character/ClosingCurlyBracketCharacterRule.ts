import {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/atom/ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ClosingCurlyBracketCharacterRule extends Rule<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super("ClosingCurlyBracketCharacter");
	}
	public override buildNode(
		atom: ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	): ClosingCurlyBracketCharacterConcreteSyntaxTreeNode {
		const node = new ClosingCurlyBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions = [new TerminalExpression("}")] as const;
		return rightExpressions;
	}
}
