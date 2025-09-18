import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../function-call-statement-segments/FunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
export type OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>;
