import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren} from "./children/FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren.ts";
export type FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionHeaderWordSegmentAbstractSyntaxTreeNodeKindName,
		FunctionHeaderWordSegmentAbstractSyntaxTreeNodeChildren
	>;
