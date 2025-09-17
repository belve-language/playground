import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingSquareBracketCharacterConcreteSyntaxTreeNode} from "../../closing-square-bracket/ClosingSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningSquareBracketCharacterConcreteSyntaxTreeNode} from "../../opening-square-bracket/OpeningSquareBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../optional-unknown-function-call-statement-segment-content/OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
export type UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNodeAtom =
	ThenAtom<
		NonTerminalAtom<OpeningSquareBracketCharacterConcreteSyntaxTreeNode>,
		ThenAtom<
			NonTerminalAtom<OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
			NonTerminalAtom<ClosingSquareBracketCharacterConcreteSyntaxTreeNode>
		>
	>;
