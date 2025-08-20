import type {PaddedStatementsBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedStatementsBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedStatementsBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedStatementsBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedStatementsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedStatementsBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedStatementsBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedStatementsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			paddedStatementsBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
