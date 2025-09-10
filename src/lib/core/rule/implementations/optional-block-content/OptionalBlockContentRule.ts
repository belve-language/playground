import type {BlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalBlockContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-block-content/OptionalBlockContentConcreteSyntaxTreeNode.ts";
import type {OptionalBlockContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-block-content/atom/OptionalBlockContentConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalBlockContentRule extends Rule<OptionalBlockContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalBlockContent");
	}
	public override buildNode(
		atom: OptionalBlockContentConcreteSyntaxTreeNodeAtom,
	): OptionalBlockContentConcreteSyntaxTreeNode {
		const node = new OptionalBlockContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<BlockContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<BlockContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.BlockContent),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
