import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren
	>;
