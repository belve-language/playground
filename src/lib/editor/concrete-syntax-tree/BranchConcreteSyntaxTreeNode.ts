import type {BranchConcreteSyntaxTreeNodeData} from "./BranchConcreteSyntaxTreeNodeData.ts";
import type {ConcreteSyntaxTreeNode} from "./ConcreteSyntaxTreeNode.ts";
export type BranchConcreteSyntaxTreeNode<
	TypeNameToUse extends string,
	ChildrenToUse extends readonly unknown[],
> = ConcreteSyntaxTreeNode<
	TypeNameToUse,
	"branch",
	BranchConcreteSyntaxTreeNodeData<ChildrenToUse>
>;
