import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionBodyConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionBodyConcreteSyntaxTreeNodeKindName} from "./kind-name/functionBodyConcreteSyntaxTreeNodeKindName.ts";
export type FunctionBodyConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionBodyConcreteSyntaxTreeNodeKindName,
	FunctionBodyConcreteSyntaxTreeNodeDataChildren
>;
