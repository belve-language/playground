import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../unknown-function-call-segment-content/UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>;
