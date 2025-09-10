import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../function/FunctionConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionsConcreteSyntaxTreeNode} from "../../optional-functions/OptionalFunctionsConcreteSyntaxTreeNode.ts";
export type FunctionsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<FunctionConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
>;
