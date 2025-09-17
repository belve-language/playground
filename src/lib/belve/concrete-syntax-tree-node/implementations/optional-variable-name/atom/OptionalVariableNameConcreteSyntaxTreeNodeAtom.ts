import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../variable-name/VariableNameConcreteSyntaxTreeNode.ts";
export type OptionalVariableNameConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>;
