import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../optional-function-call-segments/OptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalFunctionCallSegmentsConcreteSyntaxTreeNode>
	>;
