import {closingSquareBracketCharacterRuleName} from "./name/closingSquareBracketCharacterRuleName.ts";
import {closingSquareBracketCharacter} from "../../../character/implementations/closing-square-bracket/closingSquareBracketCharacter.ts";
import {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/closing-square-bracket/atom/ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ClosingSquareBracketCharacterRule extends Rule<
	ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	ClosingSquareBracketCharacterConcreteSyntaxTreeNode
> {
	public constructor() {
		super(closingSquareBracketCharacterRuleName);
	}
	public override buildNode(
		atom: ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom,
	): ClosingSquareBracketCharacterConcreteSyntaxTreeNode {
		const node = new ClosingSquareBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof closingSquareBracketCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof closingSquareBracketCharacter>,
		] = [new TerminalExpression(closingSquareBracketCharacter)];
		return rightExpressions;
	}
}
