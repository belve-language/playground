import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OrOperatorConcreteSyntaxTreeNode} from "../../or-operator/OrOperatorConcreteSyntaxTreeNode.ts";
import type {ThenOperatorConcreteSyntaxTreeNode} from "../../then-operator/ThenOperatorConcreteSyntaxTreeNode.ts";
export type OperatorConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<OrOperatorConcreteSyntaxTreeNode>
	| NonTerminalAtom<ThenOperatorConcreteSyntaxTreeNode>;
