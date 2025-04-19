import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "./kind-name/functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName,
		FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren
	>;
