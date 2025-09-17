export type SupportedParsingState =
	| ExtraCharactersParsingState
	| SuccessParsingState
	| UnexpectedCharacterParsingState
	| UnexpectedFinalizingParsingState;
