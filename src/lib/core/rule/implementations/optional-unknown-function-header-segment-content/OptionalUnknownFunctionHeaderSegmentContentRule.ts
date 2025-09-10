import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-header-segment-content/atom/OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalUnknownFunctionHeaderSegmentContentRule extends Rule<OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalUnknownFunctionHeaderSegmentContent");
	}
	public override buildNode(
		atom: OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.UnknownFunctionHeaderSegmentContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
