import type {IdentifierAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/identifier/IdentifierAbstractSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifierSegments} from "../identifier-segments/subabstractifyIdentifierSegments.ts";
export function subabstractifyIdentifier(
	identifier: IdentifierConcreteSyntaxTreeNode,
): IdentifierAbstractSyntaxTreeNode {
	const [identifierSegments] = identifier.data.children;
	const abstractifiedIdentifierSegments =
		subabstractifyIdentifierSegments(identifierSegments);
	return abstractifiedIdentifierSegments;
}
