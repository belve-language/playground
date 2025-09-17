import {BlockStatementContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement-content/BlockStatementContentConcreteSyntaxTreeNode.ts";
import type {BlockStatementContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/block-statement-content/atom/BlockStatementContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-statements/PaddedOptionalStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {blockStatementContentRuleName} from "./name/blockStatementContentRuleName.ts";
export class BlockStatementContentRule extends Rule<
	BlockStatementContentConcreteSyntaxTreeNodeAtom,
	BlockStatementContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(blockStatementContentRuleName);
	}
	public override buildNode(
		atom: BlockStatementContentConcreteSyntaxTreeNodeAtom,
	): BlockStatementContentConcreteSyntaxTreeNode {
		const node = new BlockStatementContentConcreteSyntaxTreeNode(atom);
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
			new NonTerminalExpression<PaddedOptionalStatementsConcreteSyntaxTreeNode>(
				ruleById.PaddedOptionalStatements,
			),
			new NonTerminalExpression<StatementsConcreteSyntaxTreeNode>(
				ruleById.Statements,
			),
		];
		return rightExpressions;
	}
}
