import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalSeparatedStatementsConcreteSyntaxTreeNode} from "../../optional-separated-statements/OptionalSeparatedStatementsConcreteSyntaxTreeNode.ts";
import type {StatementConcreteSyntaxTreeNode} from "../../statement/StatementConcreteSyntaxTreeNode.ts";
export type StatementsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<StatementConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalSeparatedStatementsConcreteSyntaxTreeNode>
>;
