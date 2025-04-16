import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren} from "./FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren
	>;
