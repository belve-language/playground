import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "./FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode,
	segments:
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName,
		[initialWhitespace, segments] as const,
		spanIndexes,
	);
}
