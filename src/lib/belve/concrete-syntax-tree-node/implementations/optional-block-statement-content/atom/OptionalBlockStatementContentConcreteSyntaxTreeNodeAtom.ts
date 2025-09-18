import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {BlockStatementContentConcreteSyntaxTreeNode} from "../../block-statement-content/BlockStatementContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
export type OptionalBlockStatementContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<BlockStatementContentConcreteSyntaxTreeNode>
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>;
