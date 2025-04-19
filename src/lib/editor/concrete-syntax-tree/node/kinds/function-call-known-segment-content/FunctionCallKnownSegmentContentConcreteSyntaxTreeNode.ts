import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "./FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren
	>;
