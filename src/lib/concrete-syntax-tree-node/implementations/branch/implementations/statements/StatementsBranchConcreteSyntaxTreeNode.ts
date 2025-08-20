import type {StatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/StatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {statementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/statementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class StatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	StatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof statementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: StatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			statementsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
