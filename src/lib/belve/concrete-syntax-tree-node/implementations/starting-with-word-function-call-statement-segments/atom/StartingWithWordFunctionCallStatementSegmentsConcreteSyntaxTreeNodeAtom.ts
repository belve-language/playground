import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../optional-starting-with-word-function-call-statement-segments-rest/OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {WordFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../word-function-call-statement-segment/WordFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
export type StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WordFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
	>;
