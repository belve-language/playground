import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNodeChildren} from "./FunctionCallConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallConcreteSyntaxTreeNodeKindName} from "./functionCallConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallConcreteSyntaxTreeNode = BranchConcreteSyntaxTreeNode<
	typeof functionCallConcreteSyntaxTreeNodeKindName,
	FunctionCallConcreteSyntaxTreeNodeChildren
>;
