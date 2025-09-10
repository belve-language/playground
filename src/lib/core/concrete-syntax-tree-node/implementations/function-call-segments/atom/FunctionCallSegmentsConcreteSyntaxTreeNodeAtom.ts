import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
export type FunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	// TODO RENAME TO WithKnownStarting...
	| NonTerminalAtom<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>
	| NonTerminalAtom<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>
	| NonTerminalAtom<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode>;
