import {knownFunctionCallStatementSegmentRuleName} from "./name/knownFunctionCallStatementSegmentRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import {KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment/KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment/atom/KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-statement-segment-content/OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionCallStatementSegmentRule extends Rule<
	KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(knownFunctionCallStatementSegmentRuleName);
	}
	public override buildNode(
		atom: KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode {
		const node = new KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode(
			atom,
		);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningRoundBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalKnownFunctionCallStatementSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingRoundBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
