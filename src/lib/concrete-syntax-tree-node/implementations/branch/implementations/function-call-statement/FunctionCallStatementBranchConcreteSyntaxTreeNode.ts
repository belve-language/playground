import type {FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren.ts";
import {functionCallStatementBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionCallStatementBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionCallStatementBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
	typeof functionCallStatementBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			functionCallStatementBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
