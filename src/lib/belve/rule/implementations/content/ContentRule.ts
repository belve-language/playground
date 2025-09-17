import {contentRuleName} from "./name/contentRuleName.ts";
import {ContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/content/ContentConcreteSyntaxTreeNode.ts";
import type {ContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/content/atom/ContentConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-Functions/PaddedOptionalFunctionsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ContentRule extends Rule<
	ContentConcreteSyntaxTreeNodeAtom,
	ContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(contentRuleName);
	}
	public override buildNode(
		atom: ContentConcreteSyntaxTreeNodeAtom,
	): ContentConcreteSyntaxTreeNode {
		const node = new ContentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
		NonTerminalExpression<PaddedOptionalFunctionsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
			NonTerminalExpression<PaddedOptionalFunctionsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>(
				ruleById.Functions,
			),
			new NonTerminalExpression<PaddedOptionalFunctionsConcreteSyntaxTreeNode>(
				ruleById.PaddedOptionalFunctions,
			),
		];
		return rightExpressions;
	}
}
