import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {Index} from "../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../createLeafConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "./OperatorConcreteSyntaxTreeNode.ts";
import {operatorConcreteSyntaxTreeNodeKindName} from "./operatorConcreteSyntaxTreeNodeKindName.ts";
export function createOperatorConcreteSyntaxTreeNode(
	character: OperatorCharacter,
	index: Index,
): OperatorConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		operatorConcreteSyntaxTreeNodeKindName,
		character,
		index,
	);
}
