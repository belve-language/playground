import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>;
