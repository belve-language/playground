import type {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallKnownSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren
	>;
