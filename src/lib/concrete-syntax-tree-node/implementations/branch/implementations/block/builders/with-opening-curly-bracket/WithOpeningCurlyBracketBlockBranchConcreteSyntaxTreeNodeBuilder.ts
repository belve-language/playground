import type {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import type {OpeningCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../../leaf/implementations/opening-curly-bracket/OpeningCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
export class WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren> {
	private constructor(
		children: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren,
	) {
		super(children);
	}
	public static create(
		openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode,
	): WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder {
		const builder =
			new WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder([
				openingCurlyBracket,
			]);
		return builder;
	}
}
