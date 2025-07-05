import type {OperatorCharacter} from "../../../../../characters/operator/OperatorCharacter.ts";
import type {Index} from "../../../../../index/Index.ts";
import {createLeafConcreteSyntaxTreeNode} from "../../../leaf/creating/createLeafConcreteSyntaxTreeNode.ts";
import {operatorConcreteSyntaxTreeNodeKindName} from "../kind-name/operatorConcreteSyntaxTreeNodeKindName.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../OperatorConcreteSyntaxTreeNode.ts";
export function createOperatorConcreteSyntaxTreeNode(
	character: OperatorCharacter,
	spanIndex: Index,
): OperatorConcreteSyntaxTreeNode {
	return createLeafConcreteSyntaxTreeNode(
		operatorConcreteSyntaxTreeNodeKindName,
		{character, index},
	);
}
