import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren} from "./FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren.ts";
import type {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "./functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName,
		FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren
	>;
