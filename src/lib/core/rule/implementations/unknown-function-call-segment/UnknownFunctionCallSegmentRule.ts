import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {OpeningSquareBracketCharacter} from "../../../character/implementations/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-square-bracket/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-segment-content/OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import {UnknownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment/UnknownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment/atom/UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionCallSegmentRule extends Rule<UnknownFunctionCallSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super("UnknownFunctionCallSegment");
	}
	public override buildNode(
		atom: UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionCallSegmentConcreteSyntaxTreeNode {
		const node = new UnknownFunctionCallSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningSquareBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalUnknownFunctionCallSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingSquareBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
