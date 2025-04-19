import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../BlockContentConcreteSyntaxTreeNode.ts";
import type {BlockContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/BlockContentConcreteSyntaxTreeNodeDataChildren.ts";
import {blockContentConcreteSyntaxTreeNodeKindName} from "../kind-name/blockContentConcreteSyntaxTreeNodeKindName.ts";
export function createBlockContentConcreteSyntaxTreeNode(
	children: BlockContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): BlockContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		blockContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
