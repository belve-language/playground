import {variableNameSegmentCharactersRuleName} from "./name/variableNameSegmentCharactersRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segment-characters/OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-character/VariableNameSegmentCharacterConcreteSyntaxTreeNode.ts";
import {VariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-characters/VariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-characters/atom/VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameSegmentCharactersRule extends Rule<
	VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	VariableNameSegmentCharactersConcreteSyntaxTreeNode
> {
	public constructor() {
		super(variableNameSegmentCharactersRuleName);
	}
	public override buildNode(
		atom: VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	): VariableNameSegmentCharactersConcreteSyntaxTreeNode {
		const node = new VariableNameSegmentCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<VariableNameSegmentCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<VariableNameSegmentCharacterConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.VariableNameSegmentCharacter),
				new NonTerminalExpression(
					ruleById.OptionalVariableNameSegmentCharacters,
				),
			),
		];
		return rightExpressions;
	}
}
