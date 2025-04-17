import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNodeData} from "./data/BranchConcreteSyntaxTreeNodeData.ts";
import type {branchConcreteSyntaxTreeNodeTypeName} from "./type-name/branchConcreteSyntaxTreeNodeTypeName.ts";
export type BranchConcreteSyntaxTreeNode<
	KindNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
> = ConcreteSyntaxTreeNode<
	typeof branchConcreteSyntaxTreeNodeTypeName,
	KindNameToUse,
	BranchConcreteSyntaxTreeNodeData<ChildrenToUse>
>;
