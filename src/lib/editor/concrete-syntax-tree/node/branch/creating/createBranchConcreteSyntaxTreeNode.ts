import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNode} from "../BranchConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNodeData} from "../data/BranchConcreteSyntaxTreeNodeData.ts";
import {branchConcreteSyntaxTreeNodeTypeName} from "../type-name/branchConcreteSyntaxTreeNodeTypeName.ts";
export function createBranchConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse extends readonly (ConcreteSyntaxTreeNode<
		string,
		string,
		unknown
	> | null)[],
>(
	kindName: KindNameToUse,
	data: BranchConcreteSyntaxTreeNodeData<DataChildrenToUse>,
): BranchConcreteSyntaxTreeNode<KindNameToUse, DataChildrenToUse> {
	return {typeName: branchConcreteSyntaxTreeNodeTypeName, data, kindName};
}
