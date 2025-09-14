import type {TerminalAtom} from "../../../../atom/implementations/terminal/TerminalAtom.ts";
import type {closingCurlyBracketCharacter} from "../../../../character/implementations/closing-curly-bracket/closingCurlyBracketCharacter.ts";
export type ClosingCurlyBracketCharacterConcreteSyntaxTreeNodeAtom =
	TerminalAtom<typeof closingCurlyBracketCharacter>;
