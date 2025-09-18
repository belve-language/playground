import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../closing-curly-bracket-character/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../opening-curly-bracket-character/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalBlockStatementContentConcreteSyntaxTreeNode} from "../../optional-block-statement-content/OptionalBlockStatementContentConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
export type BlockStatementConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalBlockStatementContentConcreteSyntaxTreeNode>,
		ThenAtom<
			NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
		>
	>
>;
