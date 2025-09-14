import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {openingSquareBracketCharacter} from "../../../../character/implementations/opening-square-bracket/openingSquareBracketCharacter.ts";
export type OpeningSquareBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof openingSquareBracketCharacter>;
