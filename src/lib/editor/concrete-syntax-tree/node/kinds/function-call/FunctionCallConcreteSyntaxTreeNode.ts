import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallConcreteSyntaxTreeNodeKindName,
	FunctionCallConcreteSyntaxTreeNodeDataChildren
>;
