import type {OpeningSquareBracketCharacter} from "../../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {openingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class OpeningSquareBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningSquareBracketCharacter,
	typeof openingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningSquareBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingSquareBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
