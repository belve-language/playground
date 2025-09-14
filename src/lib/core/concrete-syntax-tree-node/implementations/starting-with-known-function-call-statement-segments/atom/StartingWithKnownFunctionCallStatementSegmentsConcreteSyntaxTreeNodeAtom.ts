import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../known-function-call-statement-segment/KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-known-function-call-statement-segments-rest/OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
export type StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
	>;
