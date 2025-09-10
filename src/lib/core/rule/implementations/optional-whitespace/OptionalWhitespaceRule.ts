import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/atom/OptionalWhitespaceConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalWhitespaceRule extends Rule<OptionalWhitespaceConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalWhitespace");
	}
	public override buildNode(
		atom: OptionalWhitespaceConcreteSyntaxTreeNodeAtom,
	): OptionalWhitespaceConcreteSyntaxTreeNode {
		const node: OptionalWhitespaceConcreteSyntaxTreeNode =
			new OptionalWhitespaceConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.Whitespace),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
