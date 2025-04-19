import type {BranchConcreteSyntaxTreeNode} from "../../../BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren} from "./IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "./identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof identifierSegmentsConcreteSyntaxTreeNodeKindName,
		IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren
	>;
