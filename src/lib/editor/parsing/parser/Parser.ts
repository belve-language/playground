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
import type {SupportedFeedResult} from "../feed-result/supported/SupportedFeedResult.ts";
import type {SupportedFinalizeResult} from "../finalize-result/supported/SupportedFinalizeResult.ts";
export interface Parser {
	feedWithWhitespaceCharacter: (
		character: WhitespaceCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithOpeningSquareBracketCharacter: (
		character: OpeningSquareBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithClosingSquareBracketCharacter: (
		character: ClosingSquareBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithOpeningCurlyBracketCharacter: (
		character: OpeningCurlyBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithClosingCurlyBracketCharacter: (
		character: ClosingCurlyBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithOpeningRoundBracketCharacter: (
		character: OpeningRoundBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithClosingRoundBracketCharacter: (
		character: ClosingRoundBracketCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithIdentifierCharacter: (
		character: IdentifierCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	feedWithOperatorCharacter: (
		character: OperatorCharacter,
		spanIndex: Index,
	) => SupportedFeedResult;
	finalize: () => null | SupportedFinalizeResult;
}
