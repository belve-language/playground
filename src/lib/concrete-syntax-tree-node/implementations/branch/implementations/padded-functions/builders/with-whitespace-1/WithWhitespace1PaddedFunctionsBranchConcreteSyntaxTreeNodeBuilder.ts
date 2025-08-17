import type {WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import type {Index} from "../../../../../../../index/Index.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
import type {FunctionsBranchConcreteSyntaxTreeNode} from "../../../functions/FunctionsBranchConcreteSyntaxTreeNode.ts";
import {WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../with-functions/WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
export class WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren> {
	public constructor(
		children: WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren,
		startingIndex: Index,
	) {
		super(children, startingIndex);
	}
	public addFunctions(
		functions: FunctionsBranchConcreteSyntaxTreeNode,
	): WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder {
		return new WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder(
			[this.children[0], functions],
			this.startingIndex,
		);
	}
}
