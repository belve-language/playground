import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "./FunctionCallConcreteSyntaxTreeNode.ts";
import {functionCallConcreteSyntaxTreeNodeKindName} from "./functionCallConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallConcreteSyntaxTreeNodeKindName,
		[segments] as const,
		spanIndexes,
	);
}
