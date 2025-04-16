import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallWordSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren
	>;
