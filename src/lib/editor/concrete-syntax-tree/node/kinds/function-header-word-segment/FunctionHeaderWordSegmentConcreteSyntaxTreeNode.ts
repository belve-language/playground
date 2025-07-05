import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderWordSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren
	>;
