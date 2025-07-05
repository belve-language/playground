import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type { FunctionAbstractSyntaxTreeNodeDataChildren } from "./data-children/FunctionAbstractSyntaxTreeNodeDataChildren.ts";
import type {functionAbstractSyntaxTreeNodeKindName} from "./kind-name/functionAbstractSyntaxTreeNodeKindName.ts";
export type FunctionAbstractSyntaxTreeNode = BranchAbstractSyntaxTreeNode<
	typeof functionAbstractSyntaxTreeNodeKindName,
	FunctionAbstractSyntaxTreeNodeDataChildren
>;
