import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren.ts";
export type FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName,
		FunctionCallUnknownSegmentAbstractSyntaxTreeNodeChildren
	>;
