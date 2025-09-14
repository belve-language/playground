import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {closingSquareBracketCharacter} from "../../../../character/implementations/closing-square-bracket/closingSquareBracketCharacter.ts";
export type ClosingSquareBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof closingSquareBracketCharacter>;
