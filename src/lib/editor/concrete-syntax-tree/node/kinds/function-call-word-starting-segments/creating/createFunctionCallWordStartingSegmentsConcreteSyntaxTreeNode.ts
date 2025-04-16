import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
