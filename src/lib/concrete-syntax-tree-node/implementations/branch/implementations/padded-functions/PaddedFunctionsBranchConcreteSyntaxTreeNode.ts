import type {PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
