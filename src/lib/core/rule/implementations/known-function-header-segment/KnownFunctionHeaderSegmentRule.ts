import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import {KnownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment/KnownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment/atom/KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionHeaderSegmentRule extends Rule<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionHeaderSegmentConcreteSyntaxTreeNode {
		const node = new KnownFunctionHeaderSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningRoundBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalKnownFunctionHeaderSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingRoundBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
