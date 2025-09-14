import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function/FunctionConcreteSyntaxTreeNode.ts";
import {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/functions/atom/FunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {OptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-functions/OptionalFunctionsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {functionsRuleName} from "./name/functionsRuleName.ts";
export class FunctionsRule extends Rule<FunctionsConcreteSyntaxTreeNode> {
	public constructor() {
		super(functionsRuleName);
	}
	public override buildNode(
		atom: FunctionsConcreteSyntaxTreeNodeAtom,
	): FunctionsConcreteSyntaxTreeNode {
		const node = new FunctionsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<FunctionConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<FunctionConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<FunctionConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<FunctionConcreteSyntaxTreeNode>(
					ruleById.Function,
				),
				new NonTerminalExpression<OptionalFunctionsConcreteSyntaxTreeNode>(
					ruleById.OptionalFunctions,
				),
			),
		];
		return rightExpressions;
	}
}
