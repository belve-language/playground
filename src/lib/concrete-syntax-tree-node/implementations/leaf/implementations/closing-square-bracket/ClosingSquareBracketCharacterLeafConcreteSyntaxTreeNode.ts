import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingSquareBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingSquareBracketCharacter,
	typeof closingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingSquareBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
