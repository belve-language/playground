import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {SeparatedStatementsConcreteSyntaxTreeNode} from "../../separated-statements/SeparatedStatementsConcreteSyntaxTreeNode.ts";
export type OptionalSeparatedStatementsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<SeparatedStatementsConcreteSyntaxTreeNode>;
