import {separatedOptionalFunctionHeaderSegmentsRuleName} from "./name/separatedOptionalFunctionHeaderSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/atom/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class SeparatedOptionalFunctionHeaderSegmentsRule extends Rule<
	SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(separatedOptionalFunctionHeaderSegmentsRuleName);
	}
	public override buildNode(
		atom: SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node =
			new SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>(
					ruleById.Whitespace,
				),
				new NonTerminalExpression<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>(
					ruleById.OptionalFunctionHeaderSegments,
				),
			),
		];
		return rightExpressions;
	}
}
