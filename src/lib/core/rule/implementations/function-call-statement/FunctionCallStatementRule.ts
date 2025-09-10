import type {FunctionCallConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {FunctionCallStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement/FunctionCallStatementConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-call-statement/atom/FunctionCallStatementConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionCallStatementRule extends Rule<FunctionCallStatementConcreteSyntaxTreeNode> {
	public constructor() {
		super("FunctionCallStatement");
	}
	public override buildNode(
		atom: FunctionCallStatementConcreteSyntaxTreeNodeAtom,
	): FunctionCallStatementConcreteSyntaxTreeNode {
		const node = new FunctionCallStatementConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<FunctionCallConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionCallConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.FunctionCall)];
		return rightExpressions;
	}
}
