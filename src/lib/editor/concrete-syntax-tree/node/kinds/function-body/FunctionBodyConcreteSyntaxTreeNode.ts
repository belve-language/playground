import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeDataChildren} from "./FunctionBodyConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionBodyConcreteSyntaxTreeNodeKindName} from "./functionBodyConcreteSyntaxTreeNodeKindName.ts";
export type FunctionBodyConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionBodyConcreteSyntaxTreeNodeKindName,
	FunctionBodyConcreteSyntaxTreeNodeDataChildren
>;
