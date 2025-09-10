import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import {KnownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment/KnownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment/atom/KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-segment-content/OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionCallSegmentRule extends Rule<KnownFunctionCallSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionCallSegmentConcreteSyntaxTreeNode {
		const node = new KnownFunctionCallSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningRoundBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalKnownFunctionCallSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingRoundBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
