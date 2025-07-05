import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {BranchAbstractSyntaxTreeNodeData} from "./data/BranchAbstractSyntaxTreeNodeData.ts";
import type {branchAbstractSyntaxTreeNodeTypeName} from "./type-name/branchAbstractSyntaxTreeNodeTypeName.ts";
export type BranchAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse,
> = AbstractSyntaxTreeNode<
	KindNameToUse,
	typeof branchAbstractSyntaxTreeNodeTypeName,
	BranchAbstractSyntaxTreeNodeData<DataChildrenToUse>
>;
export class BranchAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse,
> {}