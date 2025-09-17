import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../optional-variable-name-segment-characters/OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentCharacterConcreteSyntaxTreeNode} from "../../variable-name-segment-character/VariableNameSegmentCharacterConcreteSyntaxTreeNode.ts";
export type VariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<VariableNameSegmentCharacterConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNode>
>;
