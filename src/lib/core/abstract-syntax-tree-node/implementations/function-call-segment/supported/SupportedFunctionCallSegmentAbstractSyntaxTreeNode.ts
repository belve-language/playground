import type {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {WordFunctionCallSegmentAbstractSyntaxTreeNode} from "../implementations/word/WordFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export type SupportedFunctionCallSegmentAbstractSyntaxTreeNode =
	| KnownFunctionCallSegmentAbstractSyntaxTreeNode
	| UnknownFunctionCallSegmentAbstractSyntaxTreeNode
	| WordFunctionCallSegmentAbstractSyntaxTreeNode;
