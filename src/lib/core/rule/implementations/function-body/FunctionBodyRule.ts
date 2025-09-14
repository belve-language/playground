import type {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import {FunctionBodyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-body/atom/FunctionBodyConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionBodyRule extends Rule<FunctionBodyConcreteSyntaxTreeNode> {
	public constructor() {
		super("FunctionBody");
	}
	public override buildNode(
		atom: FunctionBodyConcreteSyntaxTreeNodeAtom,
	): FunctionBodyConcreteSyntaxTreeNode {
		const functionBody = new FunctionBodyConcreteSyntaxTreeNode(atom);
		return functionBody;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<BlockConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<BlockConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.Block)];
		return rightExpressions;
	}
}
