import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../BlockConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNodeDataChildren} from "../data-children/BlockConcreteSyntaxTreeNodeDataChildren.ts";
import {blockConcreteSyntaxTreeNodeKindName} from "../kind-name/blockConcreteSyntaxTreeNodeKindName.ts";
export function createBlockConcreteSyntaxTreeNode(
	children: BlockConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): BlockConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		blockConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
