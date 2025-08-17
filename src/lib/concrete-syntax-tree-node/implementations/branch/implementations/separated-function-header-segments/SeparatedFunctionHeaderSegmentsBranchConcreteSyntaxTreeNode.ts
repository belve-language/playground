import type {SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
