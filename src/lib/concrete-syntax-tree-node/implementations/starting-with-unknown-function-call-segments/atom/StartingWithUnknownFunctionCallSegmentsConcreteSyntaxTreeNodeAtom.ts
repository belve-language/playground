import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-unknown-function-call-segments-rest/OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../unknown-function-call-segment/UnknownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<UnknownFunctionCallSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
	>;
