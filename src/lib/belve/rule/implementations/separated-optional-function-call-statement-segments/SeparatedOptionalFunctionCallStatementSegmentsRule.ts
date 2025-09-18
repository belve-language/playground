import {separatedOptionalFunctionCallStatementSegmentsRuleName} from "./name/separatedOptionalFunctionCallStatementSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-call-statement-segments/OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-statement-segments/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-statement-segments/atom/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class SeparatedOptionalFunctionCallStatementSegmentsRule extends Rule<
	SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(separatedOptionalFunctionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node =
			new SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>(
					ruleById.Whitespace,
				),
				new NonTerminalExpression<OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
					ruleById.OptionalFunctionCallStatementSegments,
				),
			),
		];
		return rightExpressions;
	}
}
