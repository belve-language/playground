import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./WhitespaceConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "./whitespaceConcreteSyntaxTreeNodeKindName.ts";
export function createWhitespaceConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): WhitespaceConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceConcreteSyntaxTreeNodeKindName,
		[segments] as const,
		spanIndexes,
	);
}
