import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {BranchAbstractSyntaxTreeNodeData} from "./data/BranchAbstractSyntaxTreeNodeData.ts";
import type {branchAbstractSyntaxTreeNodeTypeName} from "./type-name/branchAbstractSyntaxTreeNodeTypeName.ts";
export type BranchAbstractSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse extends readonly AbstractSyntaxTreeNode<
		string,
		string,
		unknown
	>[],
> = AbstractSyntaxTreeNode<
	KindNameToUse,
	typeof branchAbstractSyntaxTreeNodeTypeName,
	BranchAbstractSyntaxTreeNodeData<DataChildrenToUse>
>;
