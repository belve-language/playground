import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {ClosingCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../closing-curly-bracket/ClosingCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OpeningCurlyBracketCharacterConcreteSyntaxTreeNode} from "../../opening-curly-bracket/OpeningCurlyBracketCharacterConcreteSyntaxTreeNode.ts";
import type {OptionalBlockContentConcreteSyntaxTreeNode} from "../../optional-block-content/OptionalBlockContentConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
export type BlockStatementConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<OpeningCurlyBracketCharacterConcreteSyntaxTreeNode>,
	ThenAtom<
		NonTerminalAtom<OptionalBlockContentConcreteSyntaxTreeNode>,
		ThenAtom<
			NonTerminalAtom<ClosingCurlyBracketCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
		>
	>
>;
