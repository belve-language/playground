import type {Identifier} from "../../../abstract-syntax-tree/identifier/Identifier.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
export function abstractifyIdentifierSegments(
	identifier: IdentifierSegmentsConcreteSyntaxTreeNode,
): Identifier {
	const [identifierFirstSegment, identifierRestSegments] =
		identifier.data.children;
	if (identifierRestSegments === null) {
		return identifierFirstSegment.data.character;
	} else {
		const abstractifiedIdentifierRestSegments = abstractifyIdentifierSegments(
			identifierRestSegments,
		);
		return `${identifierFirstSegment.data.character}${abstractifiedIdentifierRestSegments}`;
	}
}
