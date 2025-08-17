import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class ClosingSquareBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<ClosingSquareBracketCharacter> {
	public constructor(character: ClosingSquareBracketCharacter, index: Index) {
		super(character, index);
	}
}
