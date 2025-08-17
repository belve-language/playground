import type {ClosingCurlyBracketCharacter} from "../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../characters/word/WordCharacter.ts";
import type {Index} from "../index/Index.ts";
import type {SupportedFeedingFinalizingResult} from "./feeding/finalizing/result/supported/SupportedFeedingFinalizingResult.ts";
import type {SupportedFeedingResult} from "./feeding/result/supported/SupportedFeedingResult.ts";
export interface SourceCodeParser {
	feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SupportedFeedingResult;
	feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SupportedFeedingResult;
	finalizeFeeding(): null | SupportedFeedingFinalizingResult;
}
