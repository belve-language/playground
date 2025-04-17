import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNodeChildren} from "../children/WhitespaceSegmentsConcreteSyntaxTreeNodeChildren.ts";
import {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export function createWhitespaceSegmentsConcreteSyntaxTreeNode(
	children: WhitespaceSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): WhitespaceSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
