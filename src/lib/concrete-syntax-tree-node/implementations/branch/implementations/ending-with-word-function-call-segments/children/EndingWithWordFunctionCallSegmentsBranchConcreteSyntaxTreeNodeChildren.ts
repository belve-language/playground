import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-call-segments/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-call-segments/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-call-segments/SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {WordFunctionCallSegmentBranchConcreteSyntaxTreeNode} from "../../word-function-call-segment/WordFunctionCallSegmentBranchConcreteSyntaxTreeNode.ts";
export type EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		functionCallSegments:
			| EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		wordFunctionCallSegment: WordFunctionCallSegmentBranchConcreteSyntaxTreeNode,
	];
