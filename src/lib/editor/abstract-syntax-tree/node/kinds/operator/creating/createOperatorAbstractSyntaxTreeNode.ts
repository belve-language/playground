import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createLeafAbstractSyntaxTreeNode} from "../../../types/leaf/creating/createLeafAbstractSyntaxTreeNode.ts";
import type {OperatorAbstractSyntaxTreeNodeDataValue} from "../data-value/OperatorAbstractSyntaxTreeNodeDataValue.ts";
import {operatorAbstractSyntaxTreeNodeKindName} from "../kind-name/identifierAbstractSyntaxTreeNodeKindName.ts";
import type {OperatorAbstractSyntaxTreeNode} from "../OperatorAbstractSyntaxTreeNode.ts";
export function createOperatorAbstractSyntaxTreeNode(
	value: OperatorAbstractSyntaxTreeNodeDataValue,
	spanIndexes: SpanIndexes,
): OperatorAbstractSyntaxTreeNode {
	return createLeafAbstractSyntaxTreeNode(
		operatorAbstractSyntaxTreeNodeKindName,
		{value, spanIndexes},
	);
}
