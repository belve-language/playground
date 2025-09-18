import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../closing-square-bracket-character/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../opening-square-bracket-character/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../optional-unknown-function-header-segment-content/OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
export type UnknownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalUnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
	>
>;
