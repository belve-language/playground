import type {LeafAbstractSyntaxTreeNodeData} from "../data/LeafAbstractSyntaxTreeNodeData.ts";
import type {LeafAbstractSyntaxTreeNode} from "../LeafAbstractSyntaxTreeNode.ts";
import {leafAbstractSyntaxTreeNodeTypeName} from "../type-name/leafAbstractSyntaxTreeNodeTypeName.ts";
export function createLeafAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataValueToUse,
>(
	kindName: KindNameToUse,
	data: LeafAbstractSyntaxTreeNodeData<DataValueToUse>,
): LeafAbstractSyntaxTreeNode<KindNameToUse, DataValueToUse> {
	return {kindName, data, typeName: leafAbstractSyntaxTreeNodeTypeName};
}
