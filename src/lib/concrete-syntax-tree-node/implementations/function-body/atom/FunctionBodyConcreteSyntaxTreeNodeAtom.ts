import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../block/BlockConcreteSyntaxTreeNode.ts";
export type FunctionBodyConcreteSyntaxTreeNodeAtom =
	NonTerminalAtom<BlockConcreteSyntaxTreeNode>;
