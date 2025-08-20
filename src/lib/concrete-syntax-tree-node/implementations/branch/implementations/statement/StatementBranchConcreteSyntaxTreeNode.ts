import type {StatementBranchConcreteSyntaxTreeNodeChildren} from "./children/StatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {statementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/statementBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class StatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	StatementBranchConcreteSyntaxTreeNodeChildren,
	typeof statementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: StatementBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes, statementBranchConcreteSyntaxTreeNodeTypeName);
	}
}
