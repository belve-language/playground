import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingSquareBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingSquareBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingSquareBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingSquareBracketCharacter,
	typeof closingSquareBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingSquareBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingSquareBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
