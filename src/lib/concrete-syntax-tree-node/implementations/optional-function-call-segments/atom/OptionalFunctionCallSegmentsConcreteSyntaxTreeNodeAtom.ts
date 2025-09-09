import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsConcreteSyntaxTreeNode} from "../../function-call-segments/FunctionCallSegmentsConcreteSyntaxTreeNode.ts";
export type OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionCallSegmentsConcreteSyntaxTreeNode>;
