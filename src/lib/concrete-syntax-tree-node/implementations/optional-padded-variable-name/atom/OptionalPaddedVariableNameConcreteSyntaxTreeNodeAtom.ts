import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
export type OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<PaddedVariableNameConcreteSyntaxTreeNode>;
