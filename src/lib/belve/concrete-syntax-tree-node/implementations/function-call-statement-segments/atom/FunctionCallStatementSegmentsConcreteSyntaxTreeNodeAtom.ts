import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
export type FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom =
	// TODO RENAME TO WithKnownStarting...
	| NonTerminalAtom<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>
	| NonTerminalAtom<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>
	| NonTerminalAtom<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>;
