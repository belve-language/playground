import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "./IdentifierConcreteSyntaxTreeNode.ts";
import {identifierConcreteSyntaxTreeNodeTypeName} from "./identifierConcreteSyntaxTreeNodeTypeName.ts";
export function createIdentifierConcreteSyntaxTreeNode(
	segments: IdentifierSegmentsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): IdentifierConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierConcreteSyntaxTreeNodeTypeName,
		[segments] as const,
		spanIndexes,
	);
}
