import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeDataChildren} from "../data-children/WhitespaceConcreteSyntaxTreeNodeDataChildren.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../WhitespaceConcreteSyntaxTreeNode.ts";
export function createWhitespaceConcreteSyntaxTreeNode(
	children: WhitespaceConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): WhitespaceConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
