import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-known-function-call-segments-rest/StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>;
