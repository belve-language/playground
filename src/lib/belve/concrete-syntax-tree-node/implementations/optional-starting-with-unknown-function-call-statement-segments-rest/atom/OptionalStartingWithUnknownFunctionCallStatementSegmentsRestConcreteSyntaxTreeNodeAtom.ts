import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-call-statement-segments-rest/StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>;
