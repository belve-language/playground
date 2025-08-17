import type {StatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/StatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class StatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<StatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: StatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
