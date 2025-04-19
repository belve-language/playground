import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {SourceFileContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/SourceFileContentConcreteSyntaxTreeNodeDataChildren.ts";
import {sourceFileContentConcreteSyntaxTreeNodeKindName} from "../kind-name/sourceFileContentConcreteSyntaxTreeNodeKindName.ts";
import type {SourceFileContentConcreteSyntaxTreeNode} from "../SourceFileContentConcreteSyntaxTreeNode.ts";
export function createSourceFileContentConcreteSyntaxTreeNode(
	children: SourceFileContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): SourceFileContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		sourceFileContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
