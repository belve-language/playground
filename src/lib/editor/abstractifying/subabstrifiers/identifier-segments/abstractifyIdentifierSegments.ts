import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
export function subabstractifyIdentifierSegments(
	identifier: IdentifierSegmentsConcreteSyntaxTreeNode,
): Identifier {
	const [identifierFirstSegment, identifierRestSegments] =
		identifier.data.children;
	if (identifierRestSegments === null) {
		return identifierFirstSegment.data.character;
	} else {
		const abstractifiedIdentifierRestSegments =
			subabstractifyIdentifierSegments(identifierRestSegments);
		return `${identifierFirstSegment.data.character}${abstractifiedIdentifierRestSegments}`;
	}
}
