import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "./BlockContentConcreteSyntaxTreeNode.ts";
import {blockContentConcreteSyntaxTreeNodeKindName} from "./blockContentConcreteSyntaxTreeNodeKindName.ts";
export function createBlockContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): BlockContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		blockContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, statements, finalWhitespace] as const,
		spanIndexes,
	);
}
