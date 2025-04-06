import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNodeChildren} from "./children/FunctionHeaderAbstractSyntaxTreeNodeChildren.ts";
export type FunctionHeaderAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionHeaderAbstractSyntaxTreeNodeTypeName,
	FunctionHeaderAbstractSyntaxTreeNodeChildren
>;
