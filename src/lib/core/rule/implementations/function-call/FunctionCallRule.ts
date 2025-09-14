import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionCallRule extends Rule<FunctionCallConcreteSyntaxTreeNode> {
	public constructor() {
		super("FunctionCall");
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
