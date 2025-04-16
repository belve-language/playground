import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "./IdentifierConcreteSyntaxTreeNode.ts";
import {identifierConcreteSyntaxTreeNodeKindName} from "./identifierConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): IdentifierConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierConcreteSyntaxTreeNodeKindName,
		[segments] as const,
		spanIndexes,
	);
}
