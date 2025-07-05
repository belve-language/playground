import type {WhitespaceCharacter} from "../../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/whitespaceSegmentConcreteSyntaxTreeNodeKindName.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../WhitespaceSegmentConcreteSyntaxTreeNode.ts";
export function createWhitespaceSegmentConcreteSyntaxTreeNode(
	character: WhitespaceCharacter,
	spanIndex: Index,
): WhitespaceSegmentConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		whitespaceSegmentConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
