import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OpeningRoundBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OpeningRoundBracketCharacter> {
	public constructor(character: OpeningRoundBracketCharacter, index: Index) {
		super(character, index);
	}
}
