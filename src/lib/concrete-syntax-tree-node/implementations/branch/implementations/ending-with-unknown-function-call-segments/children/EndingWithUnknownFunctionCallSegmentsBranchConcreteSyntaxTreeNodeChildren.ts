import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-call-segments/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-call-segments/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-call-segments/SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode} from "../../unknown-function-call-segment/UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
export type EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		functionCallSegments:
			| EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		unknownFunctionCallSegment: UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode,
	];
