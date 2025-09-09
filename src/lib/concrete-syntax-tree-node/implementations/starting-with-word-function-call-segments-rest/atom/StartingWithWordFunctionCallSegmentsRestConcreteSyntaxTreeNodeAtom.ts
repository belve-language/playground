import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
export type StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>;
