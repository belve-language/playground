import type {WhitespaceCharacter} from "../../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../types/leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceSegmentConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../WhitespaceSegmentConcreteSyntaxTreeNode.ts";
export function createWhitespaceSegmentConcreteSyntaxTreeNode(
	character: WhitespaceCharacter,
	index: Index,
): WhitespaceSegmentConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		whitespaceSegmentConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
