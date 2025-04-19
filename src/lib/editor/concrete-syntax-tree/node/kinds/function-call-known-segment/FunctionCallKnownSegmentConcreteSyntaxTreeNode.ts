import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallKnownSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
