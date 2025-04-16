import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "./SourceFileContentConcreteSyntaxTreeNode.ts";
import {sourceFileContentConcreteSyntaxTreeNodeKindName} from "./sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
export function createSourceFileContentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): SourceFileContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		sourceFileContentConcreteSyntaxTreeNodeKindName,
		[initialWhitespace, functions, finalWhitespace] as const,
		spanIndexes,
	);
}
