import {closingCurlyBracketCharacterRuleName} from "./name/closingCurlyBracketCharacterRuleName.ts";
import {closingCurlyBracketCharacter} from "../../../character/implementations/closing-curly-bracket/closingCurlyBracketCharacter.ts";
import {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/atom/ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom.ts";
import {TerminalExpression} from "../../../expression/implementations/terminal/TerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ClosingCurlyBracketCharacterRule extends Rule<
	ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	ClosingCurlyBracketCharacterConcreteSyntaxTreeNode
> {
	public constructor() {
		super(closingCurlyBracketCharacterRuleName);
	}
	public override buildNode(
		atom: ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom,
	): ClosingCurlyBracketCharacterConcreteSyntaxTreeNode {
		const node = new ClosingCurlyBracketCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [TerminalExpression<typeof closingCurlyBracketCharacter>] {
		const rightExpressions: readonly [
			TerminalExpression<typeof closingCurlyBracketCharacter>,
		] = [new TerminalExpression(closingCurlyBracketCharacter)];
		return rightExpressions;
	}
}
