import type {WordCharacter} from "../../../../../characters/word/WordCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class WordCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<WordCharacter> {
	public constructor(character: WordCharacter, index: Index) {
		super(character, index);
	}
}
