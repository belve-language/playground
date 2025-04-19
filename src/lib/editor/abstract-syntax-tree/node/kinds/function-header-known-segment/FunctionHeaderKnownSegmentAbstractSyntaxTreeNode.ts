import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren.ts";
export type FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionHeaderKnownSegmentAbstractSyntaxTreeNodeKindName,
		FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren
	>;
