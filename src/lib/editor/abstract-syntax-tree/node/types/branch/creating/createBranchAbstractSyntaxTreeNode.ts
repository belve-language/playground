import type {AbstractSyntaxTreeNode} from "../../../AbstractSyntaxTreeNode.ts";
import type {BranchAbstractSyntaxTreeNode} from "../BranchAbstractSyntaxTreeNode.ts";
import type {BranchAbstractSyntaxTreeNodeData} from "../data/BranchAbstractSyntaxTreeNodeData.ts";
import {branchAbstractSyntaxTreeNodeTypeName} from "../type-name/branchAbstractSyntaxTreeNodeTypeName.ts";
export function createBranchAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse extends readonly AbstractSyntaxTreeNode<
		string,
		string,
		unknown
	>[],
>(
	kindName: KindNameToUse,
	data: BranchAbstractSyntaxTreeNodeData<DataChildrenToUse>,
): BranchAbstractSyntaxTreeNode<KindNameToUse, DataChildrenToUse> {
	return {kindName, data, typeName: branchAbstractSyntaxTreeNodeTypeName};
}
