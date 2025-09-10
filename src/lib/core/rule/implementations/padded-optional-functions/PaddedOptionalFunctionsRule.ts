import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-functions/OptionalFunctionsConcreteSyntaxTreeNode.ts";
import {PaddedOptionalFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-Functions/PaddedOptionalFunctionsConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/padded-optional-Functions/atom/PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class PaddedOptionalFunctionsRule extends Rule<PaddedOptionalFunctionsConcreteSyntaxTreeNode> {
	public constructor() {
		super("PaddedOptionalFunctions");
	}
	public override buildNode(
		atom: PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom,
	): PaddedOptionalFunctionsConcreteSyntaxTreeNode {
		const node = new PaddedOptionalFunctionsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalFunctions),
			),
		];
		return rightExpressions;
	}
}
