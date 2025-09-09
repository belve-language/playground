import {FunctionCallConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-call/atom/FunctionCallConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-segments/FunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionCallRule extends Rule<FunctionCallConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: FunctionCallConcreteSyntaxTreeNodeAtom,
	): FunctionCallConcreteSyntaxTreeNode {
		const node = new FunctionCallConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionCallSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionCallSegmentsConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.FunctionCallSegments)];
		return rightExpressions;
	}
}
