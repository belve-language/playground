import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren
	>;
