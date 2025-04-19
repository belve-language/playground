import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeDataChildren} from "./FunctionHeaderConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderConcreteSyntaxTreeNodeKindName} from "./functionHeaderConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionHeaderConcreteSyntaxTreeNodeKindName,
	FunctionHeaderConcreteSyntaxTreeNodeDataChildren
>;
