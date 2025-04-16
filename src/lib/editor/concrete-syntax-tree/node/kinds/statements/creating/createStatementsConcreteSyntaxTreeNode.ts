import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "./StatementsConcreteSyntaxTreeNode.ts";
import {statementsConcreteSyntaxTreeNodeKindName} from "./statementsConcreteSyntaxTreeNodeKindName.ts";
export function createStatementsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): StatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsConcreteSyntaxTreeNodeKindName,
		[firstStatement, restStatements] as const,
		spanIndexes,
	);
}
