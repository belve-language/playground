import {openingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OpeningCurlyBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningCurlyBracketCharacter,
	typeof openingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningCurlyBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingCurlyBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
