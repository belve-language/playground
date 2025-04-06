import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "./WhitespaceConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeTypeName} from "./whitespaceConcreteSyntaxTreeNodeTypeName.ts";
export function createWhitespaceConcreteSyntaxTreeNode(
	segments: WhitespaceSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): WhitespaceConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceConcreteSyntaxTreeNodeTypeName,
		[segments] as const,
		spanIndexes,
	);
}
