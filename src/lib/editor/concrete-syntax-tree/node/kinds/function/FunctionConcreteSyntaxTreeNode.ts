import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeDataChildren} from "./FunctionConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionConcreteSyntaxTreeNodeKindName} from "./functionConcreteSyntaxTreeNodeKindName.ts";
export type FunctionConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionConcreteSyntaxTreeNodeKindName,
	FunctionConcreteSyntaxTreeNodeDataChildren
>;
