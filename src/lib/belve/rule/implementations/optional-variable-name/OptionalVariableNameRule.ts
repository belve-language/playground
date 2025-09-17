import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {optionalVariableNameRuleName} from "./name/optionalVariableNameRuleName.ts";
export class OptionalVariableNameRule extends Rule<OptionalVariableNameConcreteSyntaxTreeNode> {
	public constructor() {
		super(optionalVariableNameRuleName);
	}
	public override buildNode(
		atom: OptionalVariableNameConcreteSyntaxTreeNodeAtom,
	): OptionalVariableNameConcreteSyntaxTreeNode {
		const node = new OptionalVariableNameConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>(
				ruleById.VariableName,
			),
		];
		return rightExpressions;
	}
}
