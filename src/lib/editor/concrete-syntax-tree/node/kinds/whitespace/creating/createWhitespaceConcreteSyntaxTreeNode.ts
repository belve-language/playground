import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeChildren} from "../children/WhitespaceConcreteSyntaxTreeNodeChildren.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../WhitespaceConcreteSyntaxTreeNode.ts";
export function createWhitespaceConcreteSyntaxTreeNode(
	children: WhitespaceConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): WhitespaceConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		whitespaceConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
