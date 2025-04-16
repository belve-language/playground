import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeChildren} from "./IdentifierSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "./identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof identifierSegmentsConcreteSyntaxTreeNodeKindName,
		IdentifierSegmentsConcreteSyntaxTreeNodeChildren
	>;
