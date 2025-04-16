import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeChildren} from "./FunctionConcreteSyntaxTreeNodeChildren.ts";
import type {functionConcreteSyntaxTreeNodeKindName} from "./functionConcreteSyntaxTreeNodeKindName.ts";
export type FunctionConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionConcreteSyntaxTreeNodeKindName,
	FunctionConcreteSyntaxTreeNodeChildren
>;
