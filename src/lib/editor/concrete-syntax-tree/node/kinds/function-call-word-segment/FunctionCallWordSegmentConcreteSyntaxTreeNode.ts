import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallWordSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren
	>;
