import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-known-function-call-segments/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-unknown-function-call-segments/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode} from "../../ending-with-word-function-call-segments/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode.ts";
export type FunctionCallStatementBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		| EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
		| EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode
		| EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode,
	];
