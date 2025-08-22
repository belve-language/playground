import type {PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren} from "./children/PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren.ts";
import {paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class PaddedVariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	typeof paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, paddedVariableNameBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify(): string {
		const variableName = this.children[1].abstractify();
		return variableName;
	}
}
