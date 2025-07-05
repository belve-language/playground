import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionHeaderConcreteSyntaxTreeNodeKindName,
	FunctionHeaderConcreteSyntaxTreeNodeDataChildren
>;
