import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStatementsConcreteSyntaxTreeNode} from "../../optional-statements/OptionalStatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalStatementsConcreteSyntaxTreeNode>
>;
