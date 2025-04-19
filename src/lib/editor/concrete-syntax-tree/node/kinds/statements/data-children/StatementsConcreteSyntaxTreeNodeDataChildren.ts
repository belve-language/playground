import type {BlockConcreteSyntaxTreeNode} from "../../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
export type StatementsConcreteSyntaxTreeNodeDataChildren = readonly [
	firstStatement:
		| FunctionCallConcreteSyntaxTreeNode
		| BlockConcreteSyntaxTreeNode,
	restStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
];
