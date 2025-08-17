import type {SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
