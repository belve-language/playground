import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../optional-separated-variable-name-segments/OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentConcreteSyntaxTreeNode} from "../../variable-name-segment/VariableNameSegmentConcreteSyntaxTreeNode.ts";
export type VariableNameSegmentsConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<VariableNameSegmentConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>
>;
