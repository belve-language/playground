import {openingCurlyBracketCharacterRuleName} from "./name/openingCurlyBracketCharacterRuleName.ts";
import {openingCurlyBracketCharacter} from "../../../character/implementations/opening-curly-bracket/openingCurlyBracketCharacter.ts";
import {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket-character/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket-character/atom/OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OpeningCurlyBracketCharacterRule extends Rule<
	OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	OpeningCurlyBracketCharacterConcreteSyntaxTreeNode
> {
	public constructor() {
		super(openingCurlyBracketCharacterRuleName);
	}
	public override buildNode(
		atom: OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	): OpeningCurlyBracketCharacterConcreteSyntaxTreeNode {
		const node = new OpeningCurlyBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof openingCurlyBracketCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof openingCurlyBracketCharacter>,
		] = [
			new TerminalExpression<typeof openingCurlyBracketCharacter>(
				openingCurlyBracketCharacter,
			),
		];
		return rightExpressions;
	}
}
