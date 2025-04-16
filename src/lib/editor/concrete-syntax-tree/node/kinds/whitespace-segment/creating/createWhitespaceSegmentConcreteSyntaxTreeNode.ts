import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "./WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceSegmentConcreteSyntaxTreeNodeKindName} from "./whitespaceSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createWhitespaceSegmentConcreteSyntaxTreeNode(
	character: WhitespaceCharacter,
	index: Index,
): WhitespaceSegmentConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		whitespaceSegmentConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
