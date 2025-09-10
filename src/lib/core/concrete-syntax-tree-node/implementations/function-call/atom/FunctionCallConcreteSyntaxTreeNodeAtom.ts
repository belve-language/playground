import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {FunctionCallSegmentsConcreteSyntaxTreeNode} from "../../function-call-segments/FunctionCallSegmentsConcreteSyntaxTreeNode.ts";
export type FunctionCallConcreteSyntaxTreeNodeAtom =
	NonTerminalAtom<FunctionCallSegmentsConcreteSyntaxTreeNode>;
