import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
export type UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom =

		| NonTerminalAtom<PaddedOptionalVariableNameConcreteSyntaxTreeNode>
		| NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>;
