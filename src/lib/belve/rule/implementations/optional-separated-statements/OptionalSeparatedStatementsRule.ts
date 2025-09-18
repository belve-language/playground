import {optionalSeparatedStatementsRuleName} from "./name/optionalSeparatedStatementsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalSeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-separated-statements/OptionalSeparatedStatementsConcreteSyntaxTreeNode.ts";
import type {OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-separated-statements/atom/OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {SeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-statements/SeparatedStatementsConcreteSyntaxTreeNode.ts";
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
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<SeparatedStatementsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<SeparatedStatementsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<SeparatedStatementsConcreteSyntaxTreeNode>(
				ruleById.SeparatedStatements,
			),
		];
		return rightExpressions;
	}
}
