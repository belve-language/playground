import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {openingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName.ts";
export class OpeningRoundBracketCharacterLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningRoundBracketCharacter,
	typeof openingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningRoundBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingRoundBracketCharacterLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
