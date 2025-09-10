import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment-content/KnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import {OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-segment-content/OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-segment-content/atom/OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalKnownFunctionCallSegmentContentRule extends Rule<OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalKnownFunctionCallSegmentContent");
	}
	public override buildNode(
		atom: OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<KnownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<KnownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.KnownFunctionCallSegmentContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
