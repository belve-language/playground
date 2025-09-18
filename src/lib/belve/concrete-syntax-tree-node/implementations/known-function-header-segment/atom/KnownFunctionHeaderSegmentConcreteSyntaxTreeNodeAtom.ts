import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../closing-round-bracket-character/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../opening-round-bracket-character/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../optional-known-function-header-segment-content/OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
export type KnownFunctionHeaderSegmentConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalKnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode>,
		NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
	>
>;
