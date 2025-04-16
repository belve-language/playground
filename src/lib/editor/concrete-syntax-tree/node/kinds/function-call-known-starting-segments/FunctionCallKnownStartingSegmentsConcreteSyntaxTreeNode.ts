import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren} from "./FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren
	>;
