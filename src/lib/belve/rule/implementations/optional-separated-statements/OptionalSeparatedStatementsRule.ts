import {optionalSeparatedStatementsRuleName} from "./name/optionalSeparatedStatementsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalSeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-separated-statements/OptionalSeparatedStatementsConcreteSyntaxTreeNode.ts";
import type {OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-separated-statements/atom/OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {SeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-statements/SeparatedStatementsConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalSeparatedStatementsRule extends Rule<
	OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom,
	OptionalSeparatedStatementsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalSeparatedStatementsRuleName);
	}
	public override buildNode(
		atom: OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom,
	): OptionalSeparatedStatementsConcreteSyntaxTreeNode {
		const node = new OptionalSeparatedStatementsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedStatementsConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedStatementsConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.SeparatedStatements),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
