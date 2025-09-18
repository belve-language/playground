import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {KnownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../known-function-header-segment/KnownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
export type StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
	>;
