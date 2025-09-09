import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalFunctionsConcreteSyntaxTreeNode} from "../../optional-functions/OptionalFunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type PaddedOptionalFunctionsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalFunctionsConcreteSyntaxTreeNode>
>;
