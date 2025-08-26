import type {WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export class WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren> {
	private constructor(
		children: WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren,
	) {
		super(children);
	}
	public static create(
		whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	): WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder {
		const builder =
			new WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder([
				whitespace1,
			]);
		return builder;
	}
}
