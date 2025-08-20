import type {VariableNameBranchConcreteSyntaxTreeNodeChildren} from "./children/VariableNameBranchConcreteSyntaxTreeNodeChildren.ts";
import {variableNameBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/variableNameBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class VariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	VariableNameBranchConcreteSyntaxTreeNodeChildren,
	typeof variableNameBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: VariableNameBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			variableNameBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
