import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../../atom/implementations/then/ThenAtom.ts";
import type {OptionalWordCharactersConcreteSyntaxTreeNode} from "../../optional-word-characters/OptionalWordCharactersConcreteSyntaxTreeNode.ts";
import type {WordCharacterConcreteSyntaxTreeNode} from "../../word-character/WordCharacterConcreteSyntaxTreeNode.ts";
export type WordCharactersConcreteSyntaxTreeNodeAtom = ThenAtom<
	NonTerminalAtom<WordCharacterConcreteSyntaxTreeNode>,
	NonTerminalAtom<OptionalWordCharactersConcreteSyntaxTreeNode>
>;
