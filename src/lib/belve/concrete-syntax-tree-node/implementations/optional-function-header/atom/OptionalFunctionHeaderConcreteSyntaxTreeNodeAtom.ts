import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
export type OptionalFunctionHeaderConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionHeaderConcreteSyntaxTreeNode>;
