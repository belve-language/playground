import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "./FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "./functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, identifier, finalWhitespace] as const,
		spanIndexes,
	);
}
