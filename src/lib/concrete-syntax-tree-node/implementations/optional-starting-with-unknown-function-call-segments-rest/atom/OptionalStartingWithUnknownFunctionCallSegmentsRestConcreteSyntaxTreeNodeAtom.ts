import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../starting-with-unknown-function-call-segments-rest/StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
export type OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>;
