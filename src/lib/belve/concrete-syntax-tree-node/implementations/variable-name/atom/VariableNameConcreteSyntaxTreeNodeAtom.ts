import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {VariableNameSegmentsConcreteSyntaxTreeNode} from "../../variable-name-segments/VariableNameSegmentsConcreteSyntaxTreeNode.ts";
export type VariableNameConcreteSyntaxTreeNodeAtom =
	NonTerminalAtom<VariableNameSegmentsConcreteSyntaxTreeNode>;
