import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren.ts";
import type { functionCallKnownSegmentAbstractSyntaxTreeNodeKindName } from "./kind-name/functionCallKnownSegmentAbstractSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallKnownSegmentAbstractSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentAbstractSyntaxTreeNodeDataChildren
	>;
