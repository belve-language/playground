import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {openingRoundBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingRoundBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
export class OpeningRoundBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningRoundBracketCharacter,
	typeof openingRoundBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningRoundBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingRoundBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
