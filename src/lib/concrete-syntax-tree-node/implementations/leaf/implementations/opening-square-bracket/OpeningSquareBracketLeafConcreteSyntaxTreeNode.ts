import type {OpeningSquareBracketCharacter} from "../../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OpeningSquareBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningSquareBracketCharacter> {
	public constructor(character: OpeningSquareBracketCharacter, index: Index) {
		super(character, index);
	}
}
