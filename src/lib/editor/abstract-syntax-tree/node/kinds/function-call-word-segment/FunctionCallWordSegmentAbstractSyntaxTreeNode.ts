import type {BranchAbstractSyntaxTreeNode} from "../../types/branch/BranchAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNodeData} from "./data/FunctionCallWordSegmentAbstractSyntaxTreeNodeData.ts";
import type {functionCallWordSegmentAbstractSyntaxTreeNodeKindName} from "./kind-name/functionCallWordSegmentAbstractSyntaxTreeNodeKindName.ts";
export type FunctionCallWordSegmentAbstractSyntaxTreeNode =
	BranchAbstractSyntaxTreeNode<
		typeof functionCallWordSegmentAbstractSyntaxTreeNodeKindName,
		FunctionCallWordSegmentAbstractSyntaxTreeNodeData
	>;
