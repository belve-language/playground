import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionCallAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionCallAbstractSyntaxTreeNodeKindName,
	FunctionCallAbstractSyntaxTreeNodeDataChildren
>;
