import {optionalVariableNameSegmentsRuleName} from "./name/optionalVariableNameSegmentsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segments/OptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segments/atom/OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segments/VariableNameSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalVariableNameSegmentsRule extends Rule<
	OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	OptionalVariableNameSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalVariableNameSegmentsRuleName);
	}
	public override buildNode(
		atom: OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	): OptionalVariableNameSegmentsConcreteSyntaxTreeNode {
		const node = new OptionalVariableNameSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>(
				ruleById.VariableNameSegments,
			),
		];
		return rightExpressions;
	}
}
