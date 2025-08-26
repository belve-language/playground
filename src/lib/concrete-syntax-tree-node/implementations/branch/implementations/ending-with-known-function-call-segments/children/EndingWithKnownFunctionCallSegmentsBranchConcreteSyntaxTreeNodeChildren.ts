import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-call-segments/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-call-segments/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode} from "../../known-function-call-segment/KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-call-segments/SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
export type EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		FunctionCallSegments:
			| EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		knownFunctionCallSegment: KnownFunctionCallSegmentBranchConcreteSyntaxTreeNode,
	];
