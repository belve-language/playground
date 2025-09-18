import {optionalContentRuleName} from "./name/optionalContentRuleName.ts";
import type {ContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/content/ContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-content/OptionalContentConcreteSyntaxTreeNode.ts";
import type {OptionalContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-content/atom/OptionalContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalContentRule extends Rule<
	OptionalContentConcreteSyntaxTreeNodeAtom,
	OptionalContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalContentRuleName);
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
			new NonTerminalExpression<ContentConcreteSyntaxTreeNode>(
				ruleById.Content,
			),
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
		];
		return rightExpressions;
	}
}
