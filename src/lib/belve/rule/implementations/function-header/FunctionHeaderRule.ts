import {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-header/atom/FunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {functionHeaderRuleName} from "./name/functionHeaderRuleName.ts";
export class FunctionHeaderRule extends Rule<
	FunctionHeaderConcreteSyntaxTreeNodeAtom,
	FunctionHeaderConcreteSyntaxTreeNode
> {
	public constructor() {
		super(functionHeaderRuleName);
	}
	public override buildNode(
		atom: FunctionHeaderConcreteSyntaxTreeNodeAtom,
	): FunctionHeaderConcreteSyntaxTreeNode {
		const node = new FunctionHeaderConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.FunctionHeaderSegments,
			),
		];
		return rightExpressions;
	}
}
