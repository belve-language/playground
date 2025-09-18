import type {NonTerminalAtom} from "../../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../empty/EmptyConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharactersConcreteSyntaxTreeNode} from "../../whitespace-characters/WhitespaceCharactersConcreteSyntaxTreeNode.ts";
export type OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom =
	| NonTerminalAtom<EmptyConcreteSyntaxTreeNode>
	| NonTerminalAtom<WhitespaceCharactersConcreteSyntaxTreeNode>;
