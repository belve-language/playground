import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {KnownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../known-function-call-segment/KnownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-known-function-call-segments-rest/OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
export type StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<KnownFunctionCallSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
	>;
