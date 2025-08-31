import type {ClosingCurlyBracketCharacter} from "../../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingCurlyBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingCurlyBracketCharacter,
	typeof closingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingCurlyBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
