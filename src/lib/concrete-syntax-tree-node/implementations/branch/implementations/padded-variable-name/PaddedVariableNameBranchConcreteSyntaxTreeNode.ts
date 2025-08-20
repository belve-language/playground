import type {PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
