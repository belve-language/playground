import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNodeData} from "./data/BranchConcreteSyntaxTreeNodeData.ts";
import type {branchConcreteSyntaxTreeNodeTypeName} from "./type-name/branchConcreteSyntaxTreeNodeTypeName.ts";
export type BranchConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	DataChildrenToUse extends readonly (ConcreteSyntaxTreeNode<
		string,
		string,
		unknown
	> | null)[],
> = ConcreteSyntaxTreeNode<
	typeof branchConcreteSyntaxTreeNodeTypeName,
	KindNameToUse,
	BranchConcreteSyntaxTreeNodeData<DataChildrenToUse>
>;
