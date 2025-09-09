import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../optional-known-function-call-segment-content/OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
export type KnownFunctionCallSegmentConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalKnownFunctionCallSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
	>
>;
