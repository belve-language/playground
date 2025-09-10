import {ContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/content/ContentConcreteSyntaxTreeNode.ts";
import type {ContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/content/atom/ContentConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-Functions/PaddedOptionalFunctionsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class ContentRule extends Rule<ContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("Content");
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
		NonTerminalExpression<PaddedOptionalFunctionsConcreteSyntaxTreeNode>,
		NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<PaddedOptionalFunctionsConcreteSyntaxTreeNode>,
			NonTerminalExpression<FunctionsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.PaddedOptionalFunctions),
			new NonTerminalExpression(ruleById.Functions),
		];
		return rightExpressions;
	}
}
