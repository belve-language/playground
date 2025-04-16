import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-known-segment-opening-bracket/FunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentConcreteSyntaxTreeNodeKindName,
		[openingBracket, content, closingBracket] as const,
		spanIndexes,
	);
}
