import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren} from "./FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallWordSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren
	>;
