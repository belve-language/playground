import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallAbstractSyntaxTreeNodeChildren.ts";
export type FunctionCallAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionCallAbstractSyntaxTreeNodeTypeName,
	FunctionCallAbstractSyntaxTreeNodeChildren
>;
