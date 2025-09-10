import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {VariableNameCharactersConcreteSyntaxTreeNode} from "../../variable-name-characters/VariableNameCharactersConcreteSyntaxTreeNode.ts";
export type OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<VariableNameCharactersConcreteSyntaxTreeNode>;
