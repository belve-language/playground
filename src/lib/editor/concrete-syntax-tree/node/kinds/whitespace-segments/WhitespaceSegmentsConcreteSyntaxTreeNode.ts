import type {BranchConcreteSyntaxTreeNode} from "../../types/branch/BranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "./kind-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		WhitespaceSegmentsConcreteSyntaxTreeNodeChildren
	>;
