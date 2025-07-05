import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren} from "../data-children/StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren.ts";
import {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "../kind-name/statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../StatementsRestStatementsConcreteSyntaxTreeNode.ts";
export function createStatementsRestStatementsConcreteSyntaxTreeNode(
	children: StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): StatementsRestStatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
