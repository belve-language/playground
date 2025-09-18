import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>;
