import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>;
