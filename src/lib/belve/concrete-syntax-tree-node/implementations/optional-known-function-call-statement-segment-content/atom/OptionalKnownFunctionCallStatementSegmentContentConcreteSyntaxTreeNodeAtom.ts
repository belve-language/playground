import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../known-function-call-statement-segment-content/KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
export type OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>;
