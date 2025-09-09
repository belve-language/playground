import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {OptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-functions/OptionalFunctionsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-functions/atom/OptionalFunctionsConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionsRule extends Rule<OptionalFunctionsConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalFunctionsConcreteSyntaxTreeNodeAtom,
	): OptionalFunctionsConcreteSyntaxTreeNode {
		const node = new OptionalFunctionsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.Functions),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
