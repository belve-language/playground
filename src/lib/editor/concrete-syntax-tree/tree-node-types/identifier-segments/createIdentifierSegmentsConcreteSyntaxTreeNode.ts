import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "../identifier-segment/IdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "./IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {identifierSegmentsConcreteSyntaxTreeNodeTypeName} from "./identifierSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createIdentifierSegmentsConcreteSyntaxTreeNode(
	firstSegment: IdentifierSegmentConcreteSyntaxTreeNode,
	restSegments: IdentifierSegmentsConcreteSyntaxTreeNode | null,
	spanIndexes: SpanIndexes,
): IdentifierSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierSegmentsConcreteSyntaxTreeNodeTypeName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
