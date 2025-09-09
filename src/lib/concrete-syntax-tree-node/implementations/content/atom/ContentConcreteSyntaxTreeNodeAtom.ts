import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalFunctionsConcreteSyntaxTreeNode} from "../../padded-optional-Functions/PaddedOptionalFunctionsConcreteSyntaxTreeNode.ts";
export type ContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<FunctionsConcreteSyntaxTreeNode>
	| NonTerminalAtom<PaddedOptionalFunctionsConcreteSyntaxTreeNode>;
