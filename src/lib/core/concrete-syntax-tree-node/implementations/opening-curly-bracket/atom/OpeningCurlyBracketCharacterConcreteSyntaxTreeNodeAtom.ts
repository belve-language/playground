import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {openingCurlyBracketCharacter} from "../../../../character/implementations/opening-curly-bracket/openingCurlyBracketCharacter.ts";
export type OpeningCurlyBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof openingCurlyBracketCharacter>;
