import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren} from "./children/FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren.ts";
export type FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName,
		FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeChildren
	>;
