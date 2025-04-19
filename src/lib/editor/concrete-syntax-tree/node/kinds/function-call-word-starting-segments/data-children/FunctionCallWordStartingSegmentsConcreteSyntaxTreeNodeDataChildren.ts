import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../../function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
export type FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren =
	readonly [
		firstSegment: FunctionCallWordSegmentConcreteSyntaxTreeNode,
		restSegments:
			| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
			| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
			| null
			| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
	];
