import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeDataChildren} from "./BlockConcreteSyntaxTreeNodeDataChildren.ts";
import type {blockConcreteSyntaxTreeNodeKindName} from "./blockConcreteSyntaxTreeNodeKindName.ts";
export type BlockConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof blockConcreteSyntaxTreeNodeKindName,
	BlockConcreteSyntaxTreeNodeDataChildren
>;
