import type {SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
