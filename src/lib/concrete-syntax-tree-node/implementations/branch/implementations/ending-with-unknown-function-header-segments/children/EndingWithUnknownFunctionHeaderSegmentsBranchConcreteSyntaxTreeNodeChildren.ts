import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-header-segments/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-header-segments/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../separated-function-header-segments/SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode} from "../../unknown-function-header-segment/UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
export type EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		(
			| EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| null
			| SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
		),
		UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode,
	];
