import type {WordConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word/WordConcreteSyntaxTreeNode.ts";
import {WordFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-header-segment/WordFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import type {WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/word-function-header-segment/atom/WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WordFunctionHeaderSegmentRule extends Rule<WordFunctionHeaderSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super("WordFunctionHeaderSegment");
	}
	public override buildNode(
		atom: WordFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom,
	): WordFunctionHeaderSegmentConcreteSyntaxTreeNode {
		const node = new WordFunctionHeaderSegmentConcreteSyntaxTreeNode(atom);
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
