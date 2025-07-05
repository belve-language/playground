import type {BranchConcreteSyntaxTreeNode} from "../../branch/BranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren} from "./data-children/IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "./kind-name/identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export type IdentifierSegmentsConcreteSyntaxTreeNode =
	BranchConcreteSyntaxTreeNode<
		typeof identifierSegmentsConcreteSyntaxTreeNodeKindName,
		IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren
	>;
