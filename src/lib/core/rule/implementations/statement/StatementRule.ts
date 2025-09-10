import type {BlockStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement/FunctionCallStatementConcreteSyntaxTreeNode.ts";
import {StatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statement/StatementConcreteSyntaxTreeNode.ts";
import type {StatementConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/statement/atom/StatementConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StatementRule extends Rule<StatementConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: StatementConcreteSyntaxTreeNodeAtom,
	): StatementConcreteSyntaxTreeNode {
		const node = new StatementConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<BlockStatementConcreteSyntaxTreeNode>,
		NonTerminalExpression<FunctionCallStatementConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<BlockStatementConcreteSyntaxTreeNode>,
			NonTerminalExpression<FunctionCallStatementConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.BlockStatement),
			new NonTerminalExpression(ruleById.FunctionCallStatement),
		];
		return rightExpressions;
	}
}
