import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNodeChildren} from "./FunctionsConcreteSyntaxTreeNodeChildren.ts";
import type {functionsConcreteSyntaxTreeNodeKindName} from "./functionsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionsConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionsConcreteSyntaxTreeNodeKindName,
	FunctionsConcreteSyntaxTreeNodeChildren
>;
