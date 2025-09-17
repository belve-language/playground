import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalVariableNameConcreteSyntaxTreeNode} from "../../optional-variable-name/OptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type PaddedOptionalVariableNameConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalVariableNameConcreteSyntaxTreeNode>
>;
