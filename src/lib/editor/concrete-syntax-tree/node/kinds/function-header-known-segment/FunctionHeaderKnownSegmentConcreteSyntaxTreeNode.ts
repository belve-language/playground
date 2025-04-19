import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren} from "./FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
