import type {SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {separatedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			separatedStatementsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
