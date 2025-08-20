import type {FunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionHeaderBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionHeaderBranchConcreteSyntaxTreeNodeTypeName.ts";
export class FunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	typeof functionHeaderBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			functionHeaderBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
