import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderWordSegmentAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionHeaderWordSegmentAbstractSyntaxTreeNodeKindName,
		FunctionHeaderWordSegmentAbstractSyntaxTreeNodeDataChildren
	>;
