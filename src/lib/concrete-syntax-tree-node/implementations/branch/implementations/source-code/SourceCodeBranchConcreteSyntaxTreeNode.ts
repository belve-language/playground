import type {SourceCodeBranchConcreteSyntaxTreeNodeChildren} from "./children/SourceCodeBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SourceCodeBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SourceCodeBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SourceCodeBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
