import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {BlockStatementConcreteSyntaxTreeNode} from "../../block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
export type FunctionBodyConcreteSyntaxTreeNodeAtom =
	NonTerminalAtom<BlockStatementConcreteSyntaxTreeNode>;
