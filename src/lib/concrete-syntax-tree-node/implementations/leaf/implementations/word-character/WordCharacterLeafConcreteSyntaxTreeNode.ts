import type {WordCharacter} from "../../../../../characters/word/WordCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {wordCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/wordCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class WordCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	WordCharacter,
	typeof wordCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: WordCharacter, index: Index) {
		super(character, index, wordCharacterLeafConcreteSyntaxTreeNodeTypeName);
	}
}
