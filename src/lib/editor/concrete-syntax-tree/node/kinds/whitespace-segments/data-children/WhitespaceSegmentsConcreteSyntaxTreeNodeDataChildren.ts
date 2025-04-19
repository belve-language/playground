import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../../whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
export type WhitespaceSegmentsConcreteSyntaxTreeNodeDataChildren = readonly [
	firstSegment: WhitespaceSegmentConcreteSyntaxTreeNode,
	restSegments: WhitespaceSegmentsConcreteSyntaxTreeNode | null,
];
