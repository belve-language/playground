import type {WhitespaceCharacter} from "../../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class WhitespaceCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<WhitespaceCharacter> {
	public constructor(character: WhitespaceCharacter, index: Index) {
		super(character, index);
	}
}
