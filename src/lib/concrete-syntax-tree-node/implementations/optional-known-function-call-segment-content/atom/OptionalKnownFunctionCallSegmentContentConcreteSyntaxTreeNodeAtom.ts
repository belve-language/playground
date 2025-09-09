import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../known-function-call-segment-content/KnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<KnownFunctionCallSegmentContentConcreteSyntaxTreeNode>;
