import {unknownFunctionCallStatementSegmentRuleName} from "./name/unknownFunctionCallStatementSegmentRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/opening-square-bracket/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-statement-segment-content/OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import {UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment/UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment/atom/UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionCallStatementSegmentRule extends Rule<
	UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(unknownFunctionCallStatementSegmentRuleName);
	}
	public override buildNode(
		atom: UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode {
		const node = new UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode(
			atom,
		);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
				NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
					NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.OpeningSquareBracketCharacter),
				new ThenExpression(
					new NonTerminalExpression(
						ruleById.OptionalUnknownFunctionCallStatementSegmentContent,
					),
					new NonTerminalExpression(ruleById.ClosingSquareBracketCharacter),
				),
			),
		];
		return rightExpressions;
	}
}
