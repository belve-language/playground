import type {ClosingCurlyBracketCharacter} from "../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../index/Index.ts";
import type {SupportedFeedResult} from "../SupportedFeedResult.ts";
import type {SupportedFinalizeResult} from "../SupportedFinalizeResult.ts";
export interface Parser {
	feedWithWhitespaceCharacter: (
		character: WhitespaceCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningSquareBracketCharacter: (
		character: OpeningSquareBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingSquareBracketCharacter: (
		character: ClosingSquareBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningCurlyBracketCharacter: (
		character: OpeningCurlyBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingCurlyBracketCharacter: (
		character: ClosingCurlyBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningRoundBracketCharacter: (
		character: OpeningRoundBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingRoundBracketCharacter: (
		character: ClosingRoundBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithIdentifierCharacter: (
		character: IdentifierCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOperatorCharacter: (
		character: OperatorCharacter,
		index: Index,
	) => SupportedFeedResult;
	finalize: () => null | SupportedFinalizeResult;
}
