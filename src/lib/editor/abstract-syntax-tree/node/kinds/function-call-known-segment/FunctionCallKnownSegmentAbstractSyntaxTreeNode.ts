import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren.ts";
export type FunctionCallKnownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallKnownSegmentAbstractSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentAbstractSyntaxTreeNodeChildren
	>;
