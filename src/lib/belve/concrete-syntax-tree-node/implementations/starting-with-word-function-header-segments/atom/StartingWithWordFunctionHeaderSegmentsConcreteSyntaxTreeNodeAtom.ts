import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {WordFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../word-function-header-segment/WordFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WordFunctionHeaderSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
	>;
