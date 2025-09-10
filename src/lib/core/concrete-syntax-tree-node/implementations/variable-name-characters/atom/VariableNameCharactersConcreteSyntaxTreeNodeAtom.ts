import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalVariableNameCharactersConcreteSyntaxTreeNode} from "../../optional-variable-name-characters/OptionalVariableNameCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameCharacterConcreteSyntaxTreeNode} from "../../variable-name-character/VariableNameCharacterConcreteSyntaxTreeNode.ts";
export type VariableNameCharactersConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<VariableNameCharacterConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalVariableNameCharactersConcreteSyntaxTreeNode>
>;
