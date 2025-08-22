import type {VariableNameBranchConcreteSyntaxTreeNodeChildren} from "./children/VariableNameBranchConcreteSyntaxTreeNodeChildren.ts";
import {variableNameBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/variableNameBranchConcreteSyntaxTreeNodeTypeName.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class VariableNameBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	VariableNameBranchConcreteSyntaxTreeNodeChildren,
	typeof variableNameBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: VariableNameBranchConcreteSyntaxTreeNodeChildren,
	) {
		super(children, variableNameBranchConcreteSyntaxTreeNodeTypeName);
	}
	public abstractify(): string {
		const variableName = this.children[0].abstractify();
		return variableName;
	}
}
