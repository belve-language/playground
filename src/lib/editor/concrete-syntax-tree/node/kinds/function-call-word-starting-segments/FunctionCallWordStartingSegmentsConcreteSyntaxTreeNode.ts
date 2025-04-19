import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "./FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren
	>;
