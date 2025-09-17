import {separatedOptionalVariableNameSegmentsRuleName} from "./name/separatedOptionalVariableNameSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-segments/OptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import {SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-variable-name-segments/SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-optional-variable-name-segments/atom/SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class SeparatedOptionalVariableNameSegmentsRule extends Rule<
	SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(separatedOptionalVariableNameSegmentsRuleName);
	}
	public override buildNode(
		atom: SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	): SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode {
		const node =
			new SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalVariableNameSegmentsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameSegmentsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameSegmentsConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<WhitespaceConcreteSyntaxTreeNode>(
					ruleById.Whitespace,
				),
				new NonTerminalExpression<OptionalVariableNameSegmentsConcreteSyntaxTreeNode>(
					ruleById.OptionalVariableNameSegments,
				),
			),
		];
		return rightExpressions;
	}
}
