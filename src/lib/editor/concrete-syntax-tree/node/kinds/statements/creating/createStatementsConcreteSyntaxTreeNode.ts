import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeChildren} from "../children/StatementsConcreteSyntaxTreeNodeChildren.ts";
import {statementsConcreteSyntaxTreeNodeKindName} from "../kind-name/statementsConcreteSyntaxTreeNodeKindName.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../StatementsConcreteSyntaxTreeNode.ts";
export function createStatementsConcreteSyntaxTreeNode(
	children: StatementsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): StatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
