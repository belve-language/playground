import {optionalVariableNameSegmentCharactersRuleName} from "./name/optionalVariableNameSegmentCharactersRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segment-characters/OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import type {OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segment-characters/atom/OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-characters/VariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalVariableNameSegmentCharactersRule extends Rule<
	OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalVariableNameSegmentCharactersRuleName);
	}
	public override buildNode(
		atom: OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom,
	): OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode {
		const node =
			new OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>(
				ruleById.VariableNameSegmentCharacters,
			),
		];
		return rightExpressions;
	}
}
