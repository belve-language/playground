import {functionRuleName} from "./name/functionRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function/atom/FunctionConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionRule extends Rule<
	FunctionConcreteSyntaxTreeNodeAtom,
	FunctionConcreteSyntaxTreeNode
> {
	public constructor() {
		super(functionRuleName);
	}
	public override buildNode(
		atom: FunctionConcreteSyntaxTreeNodeAtom,
	): FunctionConcreteSyntaxTreeNode {
		const node = new FunctionConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OptionalFunctionHeaderConcreteSyntaxTreeNode>,
			NonTerminalAtom<FunctionBodyConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OptionalFunctionHeaderConcreteSyntaxTreeNode>,
				NonTerminalAtom<FunctionBodyConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<OptionalFunctionHeaderConcreteSyntaxTreeNode>,
				NonTerminalAtom<FunctionBodyConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<OptionalFunctionHeaderConcreteSyntaxTreeNode>(
					ruleById.OptionalFunctionHeader,
				),
				new NonTerminalExpression<FunctionBodyConcreteSyntaxTreeNode>(
					ruleById.FunctionBody,
				),
			),
		];
		return rightExpressions;
	}
}
