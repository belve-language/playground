import type {ExtraCharactersParsingState} from "../implementations/extra-characters/ExtraCharactersParsingState.ts";
import type {SuccessParsingState} from "../implementations/success/SuccessParsingState.ts";
import type {UnexpectedCharacterParsingState} from "../implementations/unexpected-character/type-name/UnexpectedCharacterParsingState.ts";
import type {UnexpectedFinalizingParsingState} from "../implementations/unexpected-finalizing/UnexpectedFinalizingParsingState.ts";
export type SupportedParsingState =
	| ExtraCharactersParsingState
	| SuccessParsingState
	| UnexpectedCharacterParsingState
	| UnexpectedFinalizingParsingState;
