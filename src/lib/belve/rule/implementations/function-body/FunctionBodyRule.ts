import {functionBodyRuleName} from "./name/functionBodyRuleName.ts";
import type {BlockStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import {FunctionBodyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-body/atom/FunctionBodyConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionBodyRule extends Rule<
	FunctionBodyConcreteSyntaxTreeNodeAtom,
	FunctionBodyConcreteSyntaxTreeNode
> {
	public constructor() {
		super(functionBodyRuleName);
	}
	public override buildNode(
		atom: FunctionBodyConcreteSyntaxTreeNodeAtom,
	): FunctionBodyConcreteSyntaxTreeNode {
		const functionBody = new FunctionBodyConcreteSyntaxTreeNode(atom);
		return functionBody;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<BlockStatementConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<BlockStatementConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<BlockStatementConcreteSyntaxTreeNode>(
				ruleById.BlockStatement,
			),
		];
		return rightExpressions;
	}
}
