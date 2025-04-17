import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeChildren} from "../children/SourceFileContentConcreteSyntaxTreeNodeChildren.ts";
import {sourceFileContentConcreteSyntaxTreeNodeKindName} from "../kind-name/sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../SourceFileContentConcreteSyntaxTreeNode.ts";
export function createSourceFileContentConcreteSyntaxTreeNode(
	children: SourceFileContentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): SourceFileContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		sourceFileContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
