import type {EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-header-segments/EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-header-segments/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-header-segments/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode.ts";
export type FunctionHeaderBranchConcreteSyntaxTreeNodeChildren = readonly [
	| EndingWithKnownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
	| EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode
	| EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode,
];
