import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-known-function-call-statement-segments-rest/StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>;
