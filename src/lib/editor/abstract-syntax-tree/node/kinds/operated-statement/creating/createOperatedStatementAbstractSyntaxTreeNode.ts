import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchAbstractSyntaxTreeNode} from "../../../types/branch/creating/createBranchAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNodeDataChildren} from "../data-children/OperatedStatementAbstractSyntaxTreeNodeDataChildren.ts";
import {operatedStatementAbstractSyntaxTreeNodeKindName} from "../kind-name/operatedStatementAbstractSyntaxTreeNodeKindName.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../OperatedStatementAbstractSyntaxTreeNode.ts";
export function createOperatedStatementAbstractSyntaxTreeNode(
	children: OperatedStatementAbstractSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): OperatedStatementAbstractSyntaxTreeNode {
	return createBranchAbstractSyntaxTreeNode(
		operatedStatementAbstractSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
