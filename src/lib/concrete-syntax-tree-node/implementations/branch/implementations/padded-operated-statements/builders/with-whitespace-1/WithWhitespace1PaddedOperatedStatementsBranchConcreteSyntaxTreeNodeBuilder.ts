import type {WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export class WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren> {
	private constructor(
		children: WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilderChildren,
	) {
		super(children);
	}
	public static create(
		whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	): WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder {
		const builder =
			new WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder(
				[whitespace1],
			);
		return builder;
	}
}
