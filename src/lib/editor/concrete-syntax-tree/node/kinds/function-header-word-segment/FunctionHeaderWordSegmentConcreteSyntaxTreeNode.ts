import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren} from "./FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderWordSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren
	>;
