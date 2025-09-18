import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../variable-name/VariableNameConcreteSyntaxTreeNode.ts";
export type UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<PaddedOptionalVariableNameConcreteSyntaxTreeNode>
		| NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>;
