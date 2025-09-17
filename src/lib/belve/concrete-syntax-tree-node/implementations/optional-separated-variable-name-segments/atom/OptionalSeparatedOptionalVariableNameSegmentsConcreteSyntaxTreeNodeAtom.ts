import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode} from "../../separated-optional-variable-name-segments/SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode.ts";
export type OptionalSeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
		| NonTerminalAtom<SeparatedOptionalVariableNameSegmentsConcreteSyntaxTreeNode>;
