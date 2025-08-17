import type {WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren} from "./children/WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren.ts";
import type {Index} from "../../../../../../../index/Index.ts";
import {BranchConcreteSyntaxTreeNodeBuilder} from "../../../../builder/BranchConcreteSyntaxTreeNodeBuilder.ts";
export class WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder extends BranchConcreteSyntaxTreeNodeBuilder<WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren> {
	public constructor(
		children: WithFunctionsPaddedFunctionsBranchConcreteSyntaxTreeNodeBuilderChildren,
		startingIndex: Index,
	) {
		super(children, startingIndex);
	}
}
