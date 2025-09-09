import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {BlockContentConcreteSyntaxTreeNode} from "../../block-content/BlockContentConcreteSyntaxTreeNode.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
export type OptionalBlockContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<BlockContentConcreteSyntaxTreeNode>
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>;
