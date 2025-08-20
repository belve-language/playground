import type {OperatorCharacter} from "../../../../../characters/operator/OperatorCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {LeafConcreteSyntaxTreeNode} from "../../LeafConcreteSyntaxTreeNode.ts";
import {operatorLeafConcreteSyntaxTreeNodeTypeName} from "./type-name/operatorLeafConcreteSyntaxTreeNodeTypeName.ts";
export class OperatorLeafConcreteSyntaxTreeNode extends LeafConcreteSyntaxTreeNode<
	OperatorCharacter,
	typeof operatorLeafConcreteSyntaxTreeNodeTypeName
> {
	public constructor(character: OperatorCharacter, index: Index) {
		super(character, index, operatorLeafConcreteSyntaxTreeNodeTypeName);
	}
}
