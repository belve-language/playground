import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierSegmentsConcreteSyntaxTreeNode(
	children: IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): IdentifierSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
