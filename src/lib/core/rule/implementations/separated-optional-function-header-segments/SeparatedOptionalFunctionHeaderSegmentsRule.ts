import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/atom/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/atom/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/whitespace/atom/WhitespaceConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class SeparatedOptionalFunctionHeaderSegmentsRule extends Rule<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super();
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
			new ThenExpression(
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalFunctionHeaderSegments),
			),
		];
		return rightExpressions;
	}
}
