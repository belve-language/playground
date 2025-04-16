import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren} from "./FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren
	>;
