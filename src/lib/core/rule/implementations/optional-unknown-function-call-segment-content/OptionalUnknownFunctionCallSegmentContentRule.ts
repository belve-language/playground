import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-segment-content/OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-segment-content/atom/OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment-content/UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalUnknownFunctionCallSegmentContentRule extends Rule<OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.UnknownFunctionCallSegmentContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
