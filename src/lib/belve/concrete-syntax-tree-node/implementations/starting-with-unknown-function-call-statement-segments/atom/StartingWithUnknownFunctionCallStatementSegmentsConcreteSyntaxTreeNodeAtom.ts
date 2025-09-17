import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-unknown-function-call-statement-segments-rest/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../unknown-function-call-statement-segment/UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
	>;
