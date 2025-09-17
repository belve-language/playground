import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentsConcreteSyntaxTreeNode} from "../../variable-name-segments/VariableNameSegmentsConcreteSyntaxTreeNode.ts";
export type OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<VariableNameSegmentsConcreteSyntaxTreeNode>;
