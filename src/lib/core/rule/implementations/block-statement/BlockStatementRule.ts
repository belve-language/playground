import type {BlockConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import {BlockStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {BlockStatementConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/block-statement/atom/BlockStatementConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class BlockStatementRule extends Rule<BlockStatementConcreteSyntaxTreeNode> {
	public constructor() {
		super("BlockStatement");
	}
	public override buildNode(
		atom: BlockStatementConcreteSyntaxTreeNodeAtom,
	): BlockStatementConcreteSyntaxTreeNode {
		const node = new BlockStatementConcreteSyntaxTreeNode(atom);
		return node;
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
