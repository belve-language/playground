import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../operator/OperatorConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "./StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {statementsRestStatementsConcreteSyntaxTreeNodeKindName} from "./statementsRestStatementsConcreteSyntaxTreeNodeKindName.ts";
export function createStatementsRestStatementsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): StatementsRestStatementsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		statementsRestStatementsConcreteSyntaxTreeNodeKindName,
		[
			beforeOperatorWhitespace,
			operator,
			afterOperatorWhitespace,
			statements,
		] as const,
		spanIndexes,
	);
}
