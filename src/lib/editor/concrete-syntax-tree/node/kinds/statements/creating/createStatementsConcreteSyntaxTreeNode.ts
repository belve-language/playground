import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeDataChildren} from "../data-children/StatementsConcreteSyntaxTreeNodeDataChildren.ts";
import {statementsConcreteSyntaxTreeNodeKindName} from "../kind-name/statementsConcreteSyntaxTreeNodeKindName.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../StatementsConcreteSyntaxTreeNode.ts";
export function createStatementsConcreteSyntaxTreeNode(
	children: StatementsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): StatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
