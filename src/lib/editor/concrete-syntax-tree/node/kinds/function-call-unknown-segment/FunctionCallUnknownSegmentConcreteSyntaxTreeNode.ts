import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "./FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
