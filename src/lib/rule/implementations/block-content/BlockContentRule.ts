import {BlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/block-content/atom/BlockContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-statements/PaddedOptionalStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class BlockContentRule extends Rule<BlockContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: BlockContentConcreteSyntaxTreeNodeAtom,
	): BlockContentConcreteSyntaxTreeNode {
		const node = new BlockContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<PaddedOptionalStatementsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<PaddedOptionalStatementsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.PaddedOptionalStatements),
			new NonTerminalExpression(ruleById.Statements),
		];
		return rightExpressions;
	}
}
