import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../functions/FunctionsConcreteSyntaxTreeNode.ts";
export type OptionalFunctionsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionsConcreteSyntaxTreeNode>;
