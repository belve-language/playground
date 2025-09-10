import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderConcreteSyntaxTreeNode} from "../../optional-function-header/OptionalFunctionHeaderConcreteSyntaxTreeNode.ts";
export type FunctionConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OptionalFunctionHeaderConcreteSyntaxTreeNode>,
	NonTerminalAtom<FunctionBodyConcreteSyntaxTreeNode>
>;
