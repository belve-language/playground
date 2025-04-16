import type {IdentifierConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifierSegments} from "../identifier-segments/abstractifyIdentifierSegments.ts";
export function abstractifyIdentifier(
	identifier: IdentifierConcreteSyntaxTreeNode,
): Identifier {
	const [identifierSegments] = identifier.data.children;
	const abstractifiedIdentifierSegments =
		abstractifyIdentifierSegments(identifierSegments);
	return abstractifiedIdentifierSegments;
}
