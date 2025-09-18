import {paddedOptionalVariableNameRuleName} from "./name/paddedOptionalVariableNameRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name/OptionalVariableNameConcreteSyntaxTreeNode.ts";
import {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/atom/PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class PaddedOptionalVariableNameRule extends Rule<
	PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom,
	PaddedOptionalVariableNameConcreteSyntaxTreeNode
> {
	public constructor() {
		super(paddedOptionalVariableNameRuleName);
	}
	public override buildNode(
		atom: PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom,
	): PaddedOptionalVariableNameConcreteSyntaxTreeNode {
		const node = new PaddedOptionalVariableNameConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalVariableNameConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>(
					ruleById.Whitespace,
				),
				new NonTerminalExpression<OptionalVariableNameConcreteSyntaxTreeNode>(
					ruleById.OptionalVariableName,
				),
			),
		];
		return rightExpressions;
	}
}
