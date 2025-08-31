import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingRoundBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingRoundBracketCharacter,
	typeof closingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingRoundBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
