import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../optional-variable-name-segments/OptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
		NonTerminalAtom<OptionalVariableNameSegmentsConcreteSyntaxTreeNode>
	>;
