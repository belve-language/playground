import {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket/atom/OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OpeningCurlyBracketCharacterRule extends Rule<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super("OpeningCurlyBracketCharacter");
	}
	public override buildNode(
		atom: OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	): OpeningCurlyBracketCharacterConcreteSyntaxTreeNode {
		const node = new OpeningCurlyBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions = [new TerminalExpression("{")] as const;
		return rightExpressions;
	}
}
