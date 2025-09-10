import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-square-bracket/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment/UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment/atom/UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionHeaderSegmentRule extends Rule<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super("UnknownFunctionHeaderSegment");
	}
	public override buildNode(
		atom: UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode {
		const node = new UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningSquareBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalUnknownFunctionHeaderSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingSquareBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
