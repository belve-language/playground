import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../opening-square-bracket/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../optional-unknown-function-call-segment-content/OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
export type UnknownFunctionCallSegmentConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalUnknownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
	>
>;
