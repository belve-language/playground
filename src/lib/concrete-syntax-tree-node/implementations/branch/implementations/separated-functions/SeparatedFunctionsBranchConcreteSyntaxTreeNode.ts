import type {SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
