import type {EmptyAtom} from "../../../atom/implementations/empty/EmptyAtom.ts";
import {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class EmptyRule extends Rule<EmptyConcreteSyntaxTreeNode> {
	public constructor() {
		super("Empty");
	}
	public override buildNode(atom: EmptyAtom): EmptyConcreteSyntaxTreeNode {
		const node = new EmptyConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [EmptyExpression] {
		const rightExpressions: readonly [EmptyExpression] = [
			new EmptyExpression(),
		];
		return rightExpressions;
	}
}
