import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionHeaderAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionHeaderAbstractSyntaxTreeNodeKindName,
	FunctionHeaderAbstractSyntaxTreeNodeDataChildren
>;
