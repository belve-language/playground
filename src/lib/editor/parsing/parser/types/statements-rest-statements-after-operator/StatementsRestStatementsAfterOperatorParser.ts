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
import type {StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree} from "./partial-concrete-syntax-tree/StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree.ts";
export class StatementsRestStatementsAfterOperatorParser implements Parser {
	private readonly tree: StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree;
	public constructor(
		tree: StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree,
	) {
		this.tree = tree;
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithIdentifierCharacter(
		character: IdentifierCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		spanIndex: Index,
	): ErrorFeedResult | SuccessFeedResult<Parser> {
		throw new Error("Not implemented.");
	}
	public finalize(): null | ErrorFinalizeResult | SuccessFinalizeResult {
		throw new Error("Not implemented.");
	}
}
