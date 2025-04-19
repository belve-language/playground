import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "./FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
