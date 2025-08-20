import type {OpeningSquareBracketCharacter} from "../../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {openingSquareBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingSquareBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
export class OpeningSquareBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningSquareBracketCharacter,
	typeof openingSquareBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningSquareBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingSquareBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
