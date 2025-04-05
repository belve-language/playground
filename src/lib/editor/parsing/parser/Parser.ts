import type {ClosingCurlyBracketCharacter} from "../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../characters/whitespace/WhitespaceCharacter.ts";
import type {ConcreteSyntaxTree} from "../../concrete-syntax-tree/ConreteSyntaxTree.ts";
import type {Index} from "../../index/Index.ts";
import type {SupportedFeedResult} from "../SupportedFeedResult.ts";
export interface Parser {
	feedWithWhitespace: (
		character: WhitespaceCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningSquareBracket: (
		character: OpeningSquareBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingSquareBracket: (
		character: ClosingSquareBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningCurlyBracket: (
		character: OpeningCurlyBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingCurlyBracket: (
		character: ClosingCurlyBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOpeningRoundBracket: (
		character: OpeningRoundBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithClosingRoundBracket: (
		character: ClosingRoundBracketCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithIdentifier: (
		character: IdentifierCharacter,
		index: Index,
	) => SupportedFeedResult;
	feedWithOperator: (
		character: OperatorCharacter,
		index: Index,
	) => SupportedFeedResult;
	finalize: () => null | ConcreteSyntaxTree;
}
