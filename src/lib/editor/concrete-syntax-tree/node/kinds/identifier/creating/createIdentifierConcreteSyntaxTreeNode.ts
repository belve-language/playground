import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNodeDataChildren} from "../data-children/IdentifierConcreteSyntaxTreeNodeDataChildren.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../IdentifierConcreteSyntaxTreeNode.ts";
import {identifierConcreteSyntaxTreeNodeKindName} from "../kind-name/identifierConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierConcreteSyntaxTreeNode(
	children: IdentifierConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): IdentifierConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
