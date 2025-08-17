import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-header-segments/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-header-segments/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-header-segments/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		(
			| EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
			| EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
		),
		WhitespaceBranchConcreteSyntaxTreeNode,
	];
