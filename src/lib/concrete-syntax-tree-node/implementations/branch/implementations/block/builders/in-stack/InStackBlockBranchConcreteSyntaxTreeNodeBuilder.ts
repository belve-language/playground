import type {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import type {ClosingCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../../leaf/implementations/closing-curly-bracket/ClosingCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../../leaf/implementations/opening-curly-bracket/OpeningCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
import type {BlockContentBranchConcreteSyntaxTreeNode} from "../../../block-content/BlockContentBranchConcreteSyntaxTreeNode.ts";
import {BlockBranchConcreteSyntaxTreeNode} from "../../BlockBranchConcreteSyntaxTreeNode.ts";
export class WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren> {
	private constructor(
		children: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilderChildren,
	) {
		super(children);
	}
	public build(
		blockContent: BlockContentBranchConcreteSyntaxTreeNode | null,
		closingCurlyBracket: ClosingCurlyBracketLeafConcreteSyntaxTreeNode,
	) {
		const node = new BlockBranchConcreteSyntaxTreeNode([
			...this.children,
			blockContent,
			closingCurlyBracket,
		]);
		return node;
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
