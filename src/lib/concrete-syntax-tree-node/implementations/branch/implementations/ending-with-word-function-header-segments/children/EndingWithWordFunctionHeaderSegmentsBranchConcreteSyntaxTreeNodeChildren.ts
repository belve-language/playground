import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-header-segments/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-header-segments/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-header-segments/SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode} from "../../word-function-header-segment/WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode.ts";
export type EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		functionHeaderSegments:
			| EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		wordFunctionHeaderSegment: WordFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
	];
