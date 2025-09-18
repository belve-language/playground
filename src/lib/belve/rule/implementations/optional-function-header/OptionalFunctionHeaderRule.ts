import {optionalFunctionHeaderRuleName} from "./name/optionalFunctionHeaderRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/atom/OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionHeaderRule extends Rule<
	OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom,
	OptionalFunctionHeaderConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalFunctionHeaderRuleName);
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
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<FunctionHeaderConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<FunctionHeaderConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<FunctionHeaderConcreteSyntaxTreeNode>(
				ruleById.FunctionHeader,
			),
		];
		return rightExpressions;
	}
}
