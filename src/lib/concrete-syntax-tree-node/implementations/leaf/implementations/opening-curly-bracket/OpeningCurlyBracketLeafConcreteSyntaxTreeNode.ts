import {openingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/openingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OpeningCurlyBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OpeningCurlyBracketCharacter,
	typeof openingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OpeningCurlyBracketCharacter, index: Index) {
		super(
			character,
			index,
			openingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
