import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
export type OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionHeaderSegmentsConcreteSyntaxTreeNode>;
