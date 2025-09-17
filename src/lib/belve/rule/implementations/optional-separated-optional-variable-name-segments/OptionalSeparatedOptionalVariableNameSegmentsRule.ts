import {optionalSeparatedOptionalVariableNameSegmentsRuleName} from "./name/optionalSeparatedOptionalVariableNameSegmentsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-separated-variable-name-segments/OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-separated-variable-name-segments/atom/OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-variable-name-segments/SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalSeparatedOptionalVariableNameSegmentsRule extends Rule<
	OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalSeparatedOptionalVariableNameSegmentsRuleName);
	}
	public override buildNode(
		atom: OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	): OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode {
		const node =
			new OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>(
				ruleById.SeparatedOptionalVariableNameSegments,
			),
		];
		return rightExpressions;
	}
}
