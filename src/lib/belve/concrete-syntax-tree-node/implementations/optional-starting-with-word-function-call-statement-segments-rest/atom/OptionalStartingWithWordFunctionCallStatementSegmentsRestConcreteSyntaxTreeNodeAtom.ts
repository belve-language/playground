import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-word-function-call-statement-segments-rest/StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>;
