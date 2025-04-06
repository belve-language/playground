import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNodeChildren} from "./children/FunctionAbstractSyntaxTreeNodeChildren.ts";
export type FunctionAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionAbstractSyntaxTreeNodeTypeName,
	FunctionAbstractSyntaxTreeNodeChildren
>;
