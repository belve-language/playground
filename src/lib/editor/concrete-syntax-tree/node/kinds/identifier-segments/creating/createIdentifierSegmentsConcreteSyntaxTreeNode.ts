import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNodeChildren} from "../children/IdentifierSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierSegmentsConcreteSyntaxTreeNode(
	children: IdentifierSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): IdentifierSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
