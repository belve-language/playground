import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeChildren} from "./FunctionBodyConcreteSyntaxTreeNodeChildren.ts";
import type {functionBodyConcreteSyntaxTreeNodeKindName} from "./functionBodyConcreteSyntaxTreeNodeKindName.ts";
export type FunctionBodyConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionBodyConcreteSyntaxTreeNodeKindName,
	FunctionBodyConcreteSyntaxTreeNodeChildren
>;
