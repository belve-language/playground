import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "../identifier-segment/IdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "./IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {identifierSegmentsConcreteSyntaxTreeNodeKindName} from "./identifierSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierSegmentsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): IdentifierSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierSegmentsConcreteSyntaxTreeNodeKindName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
