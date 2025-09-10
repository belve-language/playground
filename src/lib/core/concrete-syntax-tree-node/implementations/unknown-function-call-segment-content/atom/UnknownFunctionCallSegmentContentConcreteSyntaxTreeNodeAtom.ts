import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
export type UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode>
	| NonTerminalAtom<PaddedVariableNameConcreteSyntaxTreeNode>;
