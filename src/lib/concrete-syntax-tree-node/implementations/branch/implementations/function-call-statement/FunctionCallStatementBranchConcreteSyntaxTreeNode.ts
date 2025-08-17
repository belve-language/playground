import type {FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionCallStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
