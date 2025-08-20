import type {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../word-function-call-segment/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export type FunctionCallSegmentAbstractSyntaxTreeNode =
	| KnownFunctionCallSegmentAbstractSyntaxTreeNode
	| UnknownFunctionCallSegmentAbstractSyntaxTreeNode
	| WordFunctionCallSegmentAbstractSyntaxTreeNode;
