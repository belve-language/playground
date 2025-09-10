import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {WordCharactersConcreteSyntaxTreeNode} from "../../word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
export type WordConcreteSyntaxTreeNodeAtom =
	NonTerminalAtom<WordCharactersConcreteSyntaxTreeNode>;
