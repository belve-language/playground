import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../../operator/OperatorConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../statements/StatementsConcreteSyntaxTreeNode.ts";
export type SeparatedStatementsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OperatorConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>,
		NonTerminalAtom<StatementsConcreteSyntaxTreeNode>
	>
>;
