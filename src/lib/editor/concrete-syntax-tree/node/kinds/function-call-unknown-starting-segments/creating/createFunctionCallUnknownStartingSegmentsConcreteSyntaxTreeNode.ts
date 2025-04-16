import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../function-call-unknown-segment/FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "./FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		[firstSegment, restSegments] as const,
		spanIndexes,
	);
}
