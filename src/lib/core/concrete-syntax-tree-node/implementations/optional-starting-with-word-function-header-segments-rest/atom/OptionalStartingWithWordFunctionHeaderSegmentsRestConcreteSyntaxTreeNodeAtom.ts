import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>;
