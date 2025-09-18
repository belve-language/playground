import {openingSquareBracketCharacterRuleName} from "./name/openingSquareBracketCharacterRuleName.ts";
import {openingSquareBracketCharacter} from "../../../character/implementations/opening-square-bracket/openingSquareBracketCharacter.ts";
import {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-square-bracket-character/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/opening-square-bracket-character/atom/OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OpeningSquareBracketCharacterRule extends Rule<
	OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	OpeningSquareBracketCharacterConcreteSyntaxTreeNode
> {
	public constructor() {
		super(openingSquareBracketCharacterRuleName);
	}
	public override buildNode(
		atom: OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	): OpeningSquareBracketCharacterConcreteSyntaxTreeNode {
		const node = new OpeningSquareBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof openingSquareBracketCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof openingSquareBracketCharacter>,
		] = [
			new TerminalExpression<typeof openingSquareBracketCharacter>(
				openingSquareBracketCharacter,
			),
		];
		return rightExpressions;
	}
}
