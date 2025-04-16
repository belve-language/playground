import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import type {BranchConcreteSyntaxTreeNodeData} from "./data/BranchConcreteSyntaxTreeNodeData.ts";
export type BranchConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
> = ConcreteSyntaxTreeNode<
	TypeNameToUse,
	"branch",
	BranchConcreteSyntaxTreeNodeData<ChildrenToUse>
>;
