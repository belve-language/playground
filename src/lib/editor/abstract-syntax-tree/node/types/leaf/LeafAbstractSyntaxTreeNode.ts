import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {LeafAbstractSyntaxTreeNodeData} from "./data/LeafAbstractSyntaxTreeNodeData.ts";
import type {leafAbstractSyntaxTreeNodeTypeName} from "./type-name/leafAbstractSyntaxTreeNodeTypeName.ts";
export type LeafAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataValueToUse,
> = AbstractSyntaxTreeNode<
	KindNameToUse,
	typeof leafAbstractSyntaxTreeNodeTypeName,
	LeafAbstractSyntaxTreeNodeData<DataValueToUse>
>;
