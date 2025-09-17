import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../unknown-function-call-statement-segment-content/UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>;
