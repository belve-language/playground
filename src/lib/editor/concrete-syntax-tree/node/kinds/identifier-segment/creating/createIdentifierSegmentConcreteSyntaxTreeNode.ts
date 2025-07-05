import type {IdentifierCharacter} from "../../../../../characters/identifier/IdentifierCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "../IdentifierSegmentConcreteSyntaxTreeNode.ts";
import {identifierSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/identifierSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierSegmentConcreteSyntaxTreeNode(
	character: IdentifierCharacter,
	spanIndex: Index,
): IdentifierSegmentConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		identifierSegmentConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
