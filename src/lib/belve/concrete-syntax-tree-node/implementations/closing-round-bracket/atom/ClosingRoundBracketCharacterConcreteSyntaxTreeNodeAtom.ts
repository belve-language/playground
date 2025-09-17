import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {closingRoundBracketCharacter} from "../../../../character/implementations/closing-round-bracket/closingRoundBracketCharacter.ts";
export type ClosingRoundBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof closingRoundBracketCharacter>;
