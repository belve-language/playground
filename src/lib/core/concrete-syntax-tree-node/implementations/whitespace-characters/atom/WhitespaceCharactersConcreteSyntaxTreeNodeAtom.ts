import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalWhitespaceCharactersConcreteSyntaxTreeNode} from "../../optional-whitespace-characters/OptionalWhitespaceCharactersConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharacterConcreteSyntaxTreeNode} from "../../whitespace-character/WhitespaceCharacterConcreteSyntaxTreeNode.ts";
export type WhitespaceCharactersConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<WhitespaceCharacterConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalWhitespaceCharactersConcreteSyntaxTreeNode>
>;
