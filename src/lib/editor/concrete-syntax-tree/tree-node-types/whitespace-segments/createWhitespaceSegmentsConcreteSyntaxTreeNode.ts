import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "./WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentsConcreteSyntaxTreeNodeTypeName} from "./whitespaceSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createWhitespaceSegmentsConcreteSyntaxTreeNode(
	firstSegment: WhitespaceSegmentConcreteSyntaxTreeNode,
	restSegments: WhitespaceSegmentsConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): WhitespaceSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceSegmentsConcreteSyntaxTreeNodeTypeName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
