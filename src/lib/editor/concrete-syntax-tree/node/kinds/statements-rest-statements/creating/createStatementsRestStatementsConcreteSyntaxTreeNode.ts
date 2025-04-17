import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNodeChildren} from "../children/StatementsRestStatementsConcreteSyntaxTreeNodeChildren.ts";
import {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "../kind-name/statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../StatementsRestStatementsConcreteSyntaxTreeNode.ts";
export function createStatementsRestStatementsConcreteSyntaxTreeNode(
	children: StatementsRestStatementsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): StatementsRestStatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
