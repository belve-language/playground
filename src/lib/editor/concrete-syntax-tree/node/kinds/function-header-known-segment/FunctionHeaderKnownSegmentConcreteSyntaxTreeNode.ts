import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
