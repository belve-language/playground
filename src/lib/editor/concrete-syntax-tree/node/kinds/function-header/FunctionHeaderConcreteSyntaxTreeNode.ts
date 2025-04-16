import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderConcreteSyntaxTreeNodeKindName} from "./functionHeaderConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionHeaderConcreteSyntaxTreeNodeKindName,
	FunctionHeaderConcreteSyntaxTreeNodeChildren
>;
