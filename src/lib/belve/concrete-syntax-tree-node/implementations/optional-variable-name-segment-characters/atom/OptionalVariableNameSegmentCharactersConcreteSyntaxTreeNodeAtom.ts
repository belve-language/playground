import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../variable-name-segment-characters/VariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
export type OptionalVariableNameSegmentCharactersConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<VariableNameSegmentCharactersConcreteSyntaxTreeNode>;
