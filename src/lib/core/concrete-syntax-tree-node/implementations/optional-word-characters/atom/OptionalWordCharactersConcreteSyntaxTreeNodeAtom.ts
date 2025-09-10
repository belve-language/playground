import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {WordCharactersConcreteSyntaxTreeNode} from "../../word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
export type OptionalWordCharactersConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<WordCharactersConcreteSyntaxTreeNode>;
