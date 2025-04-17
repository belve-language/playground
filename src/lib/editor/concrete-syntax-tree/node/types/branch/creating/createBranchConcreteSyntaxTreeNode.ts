import type {BranchConcreteSyntaxTreeNode} from "../BranchConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNodeData} from "../data/BranchConcreteSyntaxTreeNodeData.ts";
import {branchConcreteSyntaxTreeNodeTypeName} from "../type-name/branchConcreteSyntaxTreeNodeTypeName.ts";
export function createBranchConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
>(
	kindName: KindNameToUse,
	data: BranchConcreteSyntaxTreeNodeData<ChildrenToUse>,
): BranchConcreteSyntaxTreeNode<KindNameToUse, ChildrenToUse> {
	return {typeName: branchConcreteSyntaxTreeNodeTypeName, data, kindName};
}
