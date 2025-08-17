import type {OpeningCurlyBracketCharacter} from "../../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OpeningCurlyBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningCurlyBracketCharacter> {
	public constructor(character: OpeningCurlyBracketCharacter, index: Index) {
		super(character, index);
	}
}
