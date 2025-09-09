import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-word-function-call-segments-rest/StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode>;
