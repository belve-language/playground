import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-unknown-segment-opening-bracket/FunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		[openingBracket, content, closingBracket] as const,
		spanIndexes,
	);
}
