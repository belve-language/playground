import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren
	>;
