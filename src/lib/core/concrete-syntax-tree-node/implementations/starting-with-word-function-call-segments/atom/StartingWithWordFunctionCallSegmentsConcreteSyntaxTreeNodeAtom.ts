import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-word-function-call-segments-rest/OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {WordFunctionCallSegmentConcreteSyntaxTreeNode} from "../../word-function-call-segment/WordFunctionCallSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WordFunctionCallSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode>
	>;
