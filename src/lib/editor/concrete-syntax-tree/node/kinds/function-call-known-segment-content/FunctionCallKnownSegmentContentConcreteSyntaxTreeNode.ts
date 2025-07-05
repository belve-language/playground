import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "./data-children/FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./kind-name/functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export type FunctionCallKnownSegmentContentConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren
	>;
