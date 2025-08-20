import type {WhitespaceCharacter} from "../../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {whitespaceCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/whitespaceCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class WhitespaceCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	WhitespaceCharacter,
	typeof whitespaceCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: WhitespaceCharacter, index: Index) {
		super(
			character,
			index,
			whitespaceCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
