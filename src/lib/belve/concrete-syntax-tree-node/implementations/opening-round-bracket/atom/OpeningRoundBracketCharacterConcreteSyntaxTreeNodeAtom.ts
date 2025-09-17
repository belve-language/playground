import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {openingRoundBracketCharacter} from "../../../../character/implementations/opening-round-bracket/openingRoundBracketCharacter.ts";
export type OpeningRoundBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof openingRoundBracketCharacter>;
