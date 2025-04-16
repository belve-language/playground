import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
