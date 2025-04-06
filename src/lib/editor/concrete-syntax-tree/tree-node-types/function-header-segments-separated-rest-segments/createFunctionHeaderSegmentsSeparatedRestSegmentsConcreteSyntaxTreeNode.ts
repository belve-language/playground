import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "./FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName} from "./functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
	initialWhitespace: WhitespaceConcreteSyntaxTreeNode,
	segments:
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeTypeName,
		[initialWhitespace, segments] as const,
		spanIndexes,
	);
}
