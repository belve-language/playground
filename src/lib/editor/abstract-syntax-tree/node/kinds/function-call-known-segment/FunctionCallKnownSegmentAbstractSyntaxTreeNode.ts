import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionCallKnownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallKnownSegmentAbstractSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren
	>;
