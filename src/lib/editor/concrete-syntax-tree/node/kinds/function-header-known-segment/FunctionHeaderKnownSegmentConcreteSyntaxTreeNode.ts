import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren
	>;
