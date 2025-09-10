import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
export type StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>;
