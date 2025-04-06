import type {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren} from "./children/FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren.ts";
export type FunctionCallWordSegmentAbstractSyntaxTreeNode =
	AbstractSyntaxTreeNode<
		typeof functionCallWordSegmentAbstractSyntaxTreeNodeTypeName,
		FunctionCallWordSegmentAbstractSyntaxTreeNodeChildren
	>;
