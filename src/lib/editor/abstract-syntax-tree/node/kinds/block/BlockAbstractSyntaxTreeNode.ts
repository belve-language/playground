import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "./children/BlockAbstractSyntaxTreeNodeChildren.ts";
export type BlockAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof blockAbstractSyntaxTreeNodeTypeName,
	BlockAbstractSyntaxTreeNodeChildren
>;
