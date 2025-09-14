import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/block-statement/atom/BlockStatementConcreteSyntaxTreeNodeAtom.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-curly-bracket/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-curly-bracket/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalBlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-block-content/OptionalBlockContentConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class BlockRule extends Rule<BlockConcreteSyntaxTreeNode> {
	public constructor() {
		super("Block");
	}
	public override buildNode(
		atom: BlockConcreteSyntaxTreeNodeAtom,
	): BlockConcreteSyntaxTreeNode {
		const node = new BlockConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalBlockContentConcreteSyntaxTreeNode>,
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
					NonTerminalAtom<OptionalBlockContentConcreteSyntaxTreeNode>,
					ThenAtom<
						NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
						NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
					>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningCurlyBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(ruleById.OptionalBlockContent),
					new ThenExpression(
						new NonTerminalExpression(ruleById.ClosingCurlyBracketCharacter),
						new NonTerminalExpression(ruleById.OptionalWhitespace),
					),
				),
			),
		];
		return rightExpressions;
	}
}
