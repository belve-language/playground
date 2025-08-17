import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class ClosingRoundBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<ClosingRoundBracketCharacter> {
	public constructor(character: ClosingRoundBracketCharacter, index: Index) {
		super(character, index);
	}
}
