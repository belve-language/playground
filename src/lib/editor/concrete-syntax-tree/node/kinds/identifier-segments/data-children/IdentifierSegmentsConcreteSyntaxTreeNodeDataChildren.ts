import type {IdentifierSegmentConcreteSyntaxTreeNode} from "../../identifier-segment/IdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../IdentifierSegmentsConcreteSyntaxTreeNode.ts";
export type IdentifierSegmentsConcreteSyntaxTreeNodeDataChildren = readonly [
	firstSegment: IdentifierSegmentConcreteSyntaxTreeNode,
	restSegments: IdentifierSegmentsConcreteSyntaxTreeNode | null,
];
