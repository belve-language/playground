import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
