import {createOperatorAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/operator/creating/createOperatorAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/operator/OperatorAbstractSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/node/kinds/operator/OperatorConcreteSyntaxTreeNode.ts";
import type {SpanIndexes} from "../../../../span-indexes/SpanIndexes.ts";
export function subabstractifyOperatorCharacter(
	operator: OperatorConcreteSyntaxTreeNode,
): OperatorAbstractSyntaxTreeNode {
	const spanIndexes: SpanIndexes = {
		starting: operator.data.index,
		ending: operator.data.index,
	};
	switch (operator.data.character) {
		case ".": {
			return createOperatorAbstractSyntaxTreeNode("and", spanIndexes);
		}
		case ",": {
			return createOperatorAbstractSyntaxTreeNode("or", spanIndexes);
		}
	}
}
