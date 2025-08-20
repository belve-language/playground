import type {FunctionBodyBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBodyBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {functionBodyBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/functionBodyBranchConcreteSyntaxTreeNodeTypeName.ts";
export class FunctionBodyBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
	typeof functionBodyBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: FunctionBodyBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			functionBodyBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
