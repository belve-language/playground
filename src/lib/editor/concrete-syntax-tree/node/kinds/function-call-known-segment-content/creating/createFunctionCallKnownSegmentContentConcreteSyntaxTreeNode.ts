import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "./FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, identifier, finalWhitespace] as const,
		spanIndexes,
	);
}
