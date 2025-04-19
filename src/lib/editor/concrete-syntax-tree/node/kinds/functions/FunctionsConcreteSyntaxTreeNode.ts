import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionsConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionsConcreteSyntaxTreeNodeKindName} from "./kind-name/functionsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionsConcreteSyntaxTreeNodeKindName,
	FunctionsConcreteSyntaxTreeNodeDataChildren
>;
