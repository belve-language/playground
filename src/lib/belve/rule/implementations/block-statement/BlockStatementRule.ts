import {blockRuleName} from "./name/blockRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import {BlockStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {BlockStatementConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/block-statement/atom/BlockStatementConcreteSyntaxTreeNodeAtom.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalBlockStatementContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-block-statement-content/OptionalBlockStatementContentConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class BlockStatementRule extends Rule<
	BlockStatementConcreteSyntaxTreeNodeAtom,
	BlockStatementConcreteSyntaxTreeNode
> {
	public constructor() {
		super(blockRuleName);
	}
	public override buildNode(
		atom: BlockStatementConcreteSyntaxTreeNodeAtom,
	): BlockStatementConcreteSyntaxTreeNode {
		const node = new BlockStatementConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalBlockStatementContentConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
					NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
				>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalBlockStatementContentConcreteSyntaxTreeNode>,
					ThenAtom<
						NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
						NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
					>
				>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalBlockStatementContentConcreteSyntaxTreeNode>,
					ThenAtom<
						NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
						NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
					>
				>
			>(
				new NonTerminalExpression<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>(
					ruleById.OpeningCurlyBracketCharacter,
				),
				new ThenExpression<
					NonTerminalAtom<OptionalBlockStatementContentConcreteSyntaxTreeNode>,
					ThenAtom<
						NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
						NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
					>
				>(
					new NonTerminalExpression<OptionalBlockStatementContentConcreteSyntaxTreeNode>(
						ruleById.OptionalBlockStatementContent,
					),
					new ThenExpression<
						NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
						NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
					>(
						new NonTerminalExpression<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>(
							ruleById.ClosingCurlyBracketCharacter,
						),
						new NonTerminalExpression<OptionalWhitespaceConcreteSyntaxTreeNode>(
							ruleById.OptionalWhitespace,
						),
					),
				),
			),
		];
		return rightExpressions;
	}
}
