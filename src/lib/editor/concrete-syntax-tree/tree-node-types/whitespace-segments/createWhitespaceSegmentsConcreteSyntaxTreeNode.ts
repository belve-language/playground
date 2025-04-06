import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "./WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentsConcreteSyntaxTreeNodeTypeName} from "./whitespaceSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createWhitespaceSegmentsConcreteSyntaxTreeNode(
	// TODO: Refactor such methods to have a children argument
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
