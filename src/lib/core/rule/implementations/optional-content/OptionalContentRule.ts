import type {ContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/content/ContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-content/OptionalContentConcreteSyntaxTreeNode.ts";
import type {OptionalContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-content/atom/OptionalContentConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalContentRule extends Rule<OptionalContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalContentConcreteSyntaxTreeNodeAtom,
	): OptionalContentConcreteSyntaxTreeNode {
		const node = new OptionalContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<ContentConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<ContentConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.Content),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
