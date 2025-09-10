import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {BlockStatementConcreteSyntaxTreeNode} from "../../block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementConcreteSyntaxTreeNode} from "../../function-call-statement/FunctionCallStatementConcreteSyntaxTreeNode.ts";
export type StatementConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<BlockStatementConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionCallStatementConcreteSyntaxTreeNode>;
