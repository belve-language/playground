import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren} from "./FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren
	>;
