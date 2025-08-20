import type {SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import {separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName.ts";
export class SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
	typeof separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			separatedFunctionHeaderBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
