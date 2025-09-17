import {variableNameSegmentsRuleName} from "./name/variableNameSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-separated-variable-name-segments/OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment/VariableNameSegmentConcreteSyntaxTreeNode.ts";
import {VariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segments/VariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name-segments/atom/VariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameSegmentsRule extends Rule<
	VariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	VariableNameSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(variableNameSegmentsRuleName);
	}
	public override buildNode(
		atom: VariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	): VariableNameSegmentsConcreteSyntaxTreeNode {
		const node = new VariableNameSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<VariableNameSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<VariableNameSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<VariableNameSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>
			>(
				ruleById.VariableNameSegment,
				ruleById.OptionalSeparatedOptionalVariableNameSegments,
			),
		];
		return rightExpressions;
	}
}
