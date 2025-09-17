import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingRoundBracketCharacterConcreteSyntaxTreeNode} from "../../closing-round-bracket/ClosingRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningRoundBracketCharacterConcreteSyntaxTreeNode} from "../../opening-round-bracket/OpeningRoundBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../optional-known-function-call-statement-segment-content/OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
export type KnownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<OpeningRoundBracketCharacterConcreteSyntaxTreeNode>,
		ThenAtom<
			NonTerminalAtom<OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalAtom<ClosingRoundBracketCharacterConcreteSyntaxTreeNode>
		>
	>;
