import {optionalBlockStatementContentRuleName} from "./name/optionalBlockStatementContentRuleName.ts";
import type {BlockStatementContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-statement-content/BlockStatementContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalBlockStatementContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-block-statement-content/OptionalBlockStatementContentConcreteSyntaxTreeNode.ts";
import type {OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-block-statement-content/atom/OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalBlockStatementContentRule extends Rule<
	OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom,
	OptionalBlockStatementContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalBlockStatementContentRuleName);
	}
	public override buildNode(
		atom: OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom,
	): OptionalBlockStatementContentConcreteSyntaxTreeNode {
		const node = new OptionalBlockStatementContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<BlockStatementContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<BlockStatementContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.BlockStatementContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
