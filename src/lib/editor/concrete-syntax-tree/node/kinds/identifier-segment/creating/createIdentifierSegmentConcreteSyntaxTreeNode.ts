import type {IdentifierCharacter} from "../../../characters/identifier/IdentifierCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentConcreteSyntaxTreeNode} from "./IdentifierSegmentConcreteSyntaxTreeNode.ts";
import {identifierSegmentConcreteSyntaxTreeNodeKindName} from "./identifierSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createIdentifierSegmentConcreteSyntaxTreeNode(
	character: IdentifierCharacter,
	index: Index,
): IdentifierSegmentConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		identifierSegmentConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
