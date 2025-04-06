import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "./BlockAbstractSyntaxTreeNodeChildren.ts";
import type {blockAbstractSyntaxTreeNodeTypeName} from "./blockAbstractSyntaxTreeNodeTypeName.ts";
export type BlockAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof blockAbstractSyntaxTreeNodeTypeName,
	BlockAbstractSyntaxTreeNodeChildren
>;
