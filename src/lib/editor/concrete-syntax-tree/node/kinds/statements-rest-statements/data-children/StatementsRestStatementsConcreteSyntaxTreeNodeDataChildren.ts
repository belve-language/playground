import type {OperatorConcreteSyntaxTreeNode} from "../../operator/OperatorConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../statements/StatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type StatementsRestStatementsConcreteSyntaxTreeNodeDataChildren =
	readonly [
		beforeOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		operator: OperatorConcreteSyntaxTreeNode,
		afterOperatorWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
		statements: StatementsConcreteSyntaxTreeNode,
	];
