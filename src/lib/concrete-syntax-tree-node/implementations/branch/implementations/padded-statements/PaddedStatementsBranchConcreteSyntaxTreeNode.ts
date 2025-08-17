import type {PaddedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<PaddedStatementsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: PaddedStatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
