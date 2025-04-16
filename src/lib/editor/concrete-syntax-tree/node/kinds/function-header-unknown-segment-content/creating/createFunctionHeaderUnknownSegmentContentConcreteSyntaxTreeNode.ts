import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "./FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, identifier, finalWhitespace] as const,
		spanIndexes,
	);
}
s;
