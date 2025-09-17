import {wordFunctionCallStatementSegmentRuleName} from "./name/wordFunctionCallStatementSegmentRuleName.ts";
import type {WordConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word/WordConcreteSyntaxTreeNode.ts";
import {WordFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-call-statement-segment/WordFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import type {WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/word-function-call-statement-segment/atom/WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WordFunctionCallStatementSegmentRule extends Rule<WordFunctionCallStatementSegmentConcreteSyntaxTreeNode> {
	public constructor() {
		super(wordFunctionCallStatementSegmentRuleName);
	}
	public override buildNode(
		atom: WordFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom,
	): WordFunctionCallStatementSegmentConcreteSyntaxTreeNode {
		const node = new WordFunctionCallStatementSegmentConcreteSyntaxTreeNode(
			atom,
		);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<WordConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<WordConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression<WordConcreteSyntaxTreeNode>(ruleById.Word)];
		return rightExpressions;
	}
}
