import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {PaddedOptionalStatementsConcreteSyntaxTreeNode} from "../../padded-optional-statements/PaddedOptionalStatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../statements/StatementsConcreteSyntaxTreeNode.ts";
export type BlockContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<PaddedOptionalStatementsConcreteSyntaxTreeNode>
	| NonTerminalAtom<StatementsConcreteSyntaxTreeNode>;
