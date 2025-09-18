import {openingRoundBracketCharacterRuleName} from "./name/openingRoundBracketCharacterRuleName.ts";
import {openingRoundBracketCharacter} from "../../../character/implementations/opening-round-bracket/openingRoundBracketCharacter.ts";
import {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket-character/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket-character/atom/OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OpeningRoundBracketCharacterRule extends Rule<
	OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	OpeningRoundBracketCharacterConcreteSyntaxTreeNode
> {
	public constructor() {
		super(openingRoundBracketCharacterRuleName);
	}
	public override buildNode(
		atom: OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom,
	): OpeningRoundBracketCharacterConcreteSyntaxTreeNode {
		const node = new OpeningRoundBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof openingRoundBracketCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof openingRoundBracketCharacter>,
		] = [
			new TerminalExpression<typeof openingRoundBracketCharacter>(
				openingRoundBracketCharacter,
			),
		];
		return rightExpressions;
	}
}
