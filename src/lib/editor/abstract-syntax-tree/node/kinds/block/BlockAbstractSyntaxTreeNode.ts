import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeDataChildren} from "./data-children/BlockAbstractSyntaxTreeNodeDataChildren.ts";
import type {blockAbstractSyntaxTreeNodeKindName} from "./kind-name/blockAbstractSyntaxTreeNodeKindName.ts";
export type BlockAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof blockAbstractSyntaxTreeNodeKindName,
	BlockAbstractSyntaxTreeNodeDataChildren
>;
