import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import type {ErrorFeedResult} from "../../../feed-result/types/error/ErrorFeedResult.ts";
import type {SuccessFeedResult} from "../../../feed-result/types/success/SuccessFeedResult.ts";
import type {ErrorFinalizeResult} from "../../../finalize-result/types/error/ErrorFinalizeResult.ts";
import type {SuccessFinalizeResult} from "../../../finalize-result/types/success/SuccessFinalizeResult.ts";
import type {Parser} from "../../Parser.ts";
import type {FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./partial-concrete-syntax-tree/FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser
	implements Parser
{
	private readonly sourceFileContent: FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		sourceFileContent: FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.sourceFileContent = sourceFileContent;
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithIdentifierCharacter(
		character: IdentifierCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public finalize(): null | ErrorFinalizeResult | SuccessFinalizeResult {
		throw new Error("Not implemented.");
	}
}
