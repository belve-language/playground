import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import {OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-header-segment-content/atom/OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalKnownFunctionHeaderSegmentContentRule extends Rule<OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.KnownFunctionHeaderSegmentContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
