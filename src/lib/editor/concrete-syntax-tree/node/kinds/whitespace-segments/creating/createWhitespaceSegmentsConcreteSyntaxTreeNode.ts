import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../../whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export function createWhitespaceSegmentsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): WhitespaceSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceSegmentsConcreteSyntaxTreeNodeKindName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
