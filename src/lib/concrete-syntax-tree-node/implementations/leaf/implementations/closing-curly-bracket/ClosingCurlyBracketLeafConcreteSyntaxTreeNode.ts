import type {ClosingCurlyBracketCharacter} from "../../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingCurlyBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingCurlyBracketCharacter,
	typeof closingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingCurlyBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingCurlyBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
