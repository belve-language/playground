import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../optional-function-header-segments/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>
	>;
