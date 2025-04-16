import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-call-unknown-segment-opening-bracket/FunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		[openingBracket, content, closingBracket] as const,
		spanIndexes,
	);
}
