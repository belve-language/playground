import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/atom/OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionHeaderRule extends Rule<OptionalFunctionHeaderConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom,
	): OptionalFunctionHeaderConcreteSyntaxTreeNode {
		const node = new OptionalFunctionHeaderConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionHeaderConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionHeaderConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.FunctionHeader),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
