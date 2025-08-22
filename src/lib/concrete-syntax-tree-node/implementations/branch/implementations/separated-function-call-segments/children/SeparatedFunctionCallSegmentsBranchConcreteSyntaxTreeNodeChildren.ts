import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-call-segments/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-call-segments/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-call-segments/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		functionCallSegments:
			| EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
		whitespace: WhitespaceBranchConcreteSyntaxTreeNode,
	];
