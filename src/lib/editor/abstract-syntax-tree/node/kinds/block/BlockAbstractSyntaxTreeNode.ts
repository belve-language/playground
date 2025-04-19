import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeDataChildren} from "./data-children/BlockAbstractSyntaxTreeNodeDataChildren.ts";
export type BlockAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof blockAbstractSyntaxTreeNodeKindName,
	BlockAbstractSyntaxTreeNodeDataChildren
>;
