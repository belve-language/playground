import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-closing-bracket/FunctionHeaderKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../function-header-known-segment-content/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../function-header-known-segment-opening-bracket/FunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName,
		[openingBracket, content, closingBracket] as const,
		spanIndexes,
	);
}
