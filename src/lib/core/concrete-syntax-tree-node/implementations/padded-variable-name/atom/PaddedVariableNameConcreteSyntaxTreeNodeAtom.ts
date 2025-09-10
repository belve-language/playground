import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../variable-name/VariableNameConcreteSyntaxTreeNode.ts";
export type PaddedVariableNameConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
>;
