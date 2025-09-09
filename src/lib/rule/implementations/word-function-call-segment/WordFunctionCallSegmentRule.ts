import type {WordConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word/WordConcreteSyntaxTreeNode.ts";
import {WordFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-call-segment/WordFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import type {WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/word-function-call-segment/atom/WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WordFunctionCallSegmentRule extends Rule<WordFunctionCallSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: WordFunctionCallSegmentConcreteSyntaxTreeNodeAtom,
	): WordFunctionCallSegmentConcreteSyntaxTreeNode {
		const node = new WordFunctionCallSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<WordConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<WordConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.Word)];
		return rightExpressions;
	}
}
