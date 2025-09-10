import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
export type WhitespaceCharacterConcreteSyntaxTreeNodeAtom =
	| TerminalAtom<" ">
	| TerminalAtom<"\n">
	| TerminalAtom<"\t">;
