import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNodeChildren} from "../children/IdentifierConcreteSyntaxTreeNodeChildren.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../IdentifierConcreteSyntaxTreeNode.ts";
import {identifierConcreteSyntaxTreeNodeKindName} from "../kind-name/identifierConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierConcreteSyntaxTreeNode(
	children: IdentifierConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): IdentifierConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		identifierConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
