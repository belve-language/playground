import type {WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export class WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren> {
	private constructor(
		children: WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren,
	) {
		super(children);
	}
	public static create(
		whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	): WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder {
		const builder =
			new WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder([
				whitespace1,
			]);
		return builder;
	}
}
