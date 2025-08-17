import type {OperatorCharacter} from "../../../../../characters/operator/OperatorCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
export class OperatorLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<OperatorCharacter> {
	public constructor(character: OperatorCharacter, index: Index) {
		super(character, index);
	}
}
