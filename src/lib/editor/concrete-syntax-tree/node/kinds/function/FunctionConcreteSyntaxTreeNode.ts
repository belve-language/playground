import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionConcreteSyntaxTreeNodeKindName} from "./kind-name/functionConcreteSyntaxTreeNodeKindName.ts";
export type FunctionConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionConcreteSyntaxTreeNodeKindName,
	FunctionConcreteSyntaxTreeNodeDataChildren
>;
