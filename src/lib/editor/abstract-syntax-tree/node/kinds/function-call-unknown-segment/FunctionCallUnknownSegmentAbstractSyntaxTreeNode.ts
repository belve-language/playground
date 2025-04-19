import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallUnknownSegmentAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallUnknownSegmentAbstractSyntaxTreeNodeKindName,
		FunctionCallUnknownSegmentAbstractSyntaxTreeNodeDataChildren
	>;
