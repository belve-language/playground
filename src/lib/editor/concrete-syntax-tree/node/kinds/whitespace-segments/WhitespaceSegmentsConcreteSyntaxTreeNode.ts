import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren} from "./data-children/WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "./kind-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren
	>;
