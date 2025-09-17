import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../unknown-function-header-segment/UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
	>;
