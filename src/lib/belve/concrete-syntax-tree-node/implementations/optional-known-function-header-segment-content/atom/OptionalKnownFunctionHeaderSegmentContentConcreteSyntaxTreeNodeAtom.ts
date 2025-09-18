import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../known-function-header-segment-content/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>;
