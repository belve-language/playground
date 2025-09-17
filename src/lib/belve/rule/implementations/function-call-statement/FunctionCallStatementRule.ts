import {functionCallStatementRuleName} from "./name/functionCallStatementRuleName.ts";
import {FunctionCallStatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement/FunctionCallStatementConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-call-statement/atom/FunctionCallStatementConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement-segments/FunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionCallStatementRule extends Rule<
	FunctionCallStatementConcreteSyntaxTreeNodeAtom,
	FunctionCallStatementConcreteSyntaxTreeNode
> {
	public constructor() {
		super(functionCallStatementRuleName);
	}
	public override buildNode(
		atom: FunctionCallStatementConcreteSyntaxTreeNodeAtom,
	): FunctionCallStatementConcreteSyntaxTreeNode {
		const node = new FunctionCallStatementConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
				ruleById.FunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
