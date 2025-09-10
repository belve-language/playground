import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../optional-padded-variable-name/OptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalPaddedVariableNameConcreteSyntaxTreeNode>
	>;
