import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {closingRoundBracketLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/closingRoundBracketLeafConcreteSyntaxTreeNodeTypeName.ts";
export class ClosingRoundBracketLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	ClosingRoundBracketCharacter,
	typeof closingRoundBracketLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: ClosingRoundBracketCharacter, index: Index) {
		super(
			character,
			index,
			closingRoundBracketLeafConcreteSyntaxTreeNodeTypeName,
		);
	}
}
