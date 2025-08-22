import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-header-segments/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-header-segments/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode} from "../../known-function-header-segment/KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-header-segments/SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
export type EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		functionHeaderSegments:
			| EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
		knownFunctionHeaderSegment: KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
	];
