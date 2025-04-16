import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "./FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, identifier, finalWhitespace] as const,
		spanIndexes,
	);
}
