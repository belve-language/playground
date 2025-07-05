import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export function createWhitespaceSegmentsConcreteSyntaxTreeNode(
	children: WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): WhitespaceSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
