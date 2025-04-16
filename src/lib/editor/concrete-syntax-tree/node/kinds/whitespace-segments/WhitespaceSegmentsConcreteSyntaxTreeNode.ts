import type {WhitespaceSegmentsConcreteSyntaxTreeNodeChildren} from "./children/WhitespaceSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "./type-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		WhitespaceSegmentsConcreteSyntaxTreeNodeChildren
	>;
