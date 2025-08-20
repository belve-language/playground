import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../characters/word/WordCharacter.ts";
import type {InStackBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/in-stack/InStackBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import type {SupportedFeedingFinalizingResult} from "../../feeding/finalizing/result/supported/SupportedFeedingFinalizingResult.ts";
import {ErrorFeedingResult} from "../../feeding/result/implementations/error/ErrorFeedingResult.ts";
import {SuccessFeedingResult} from "../../feeding/result/implementations/success/SuccessFeedingResult.ts";
import type {SupportedFeedingResult} from "../../feeding/result/supported/SupportedFeedingResult.ts";
import {AfterFunctionSourceCodeParser} from "../after-function/AfterFunctionSourceCodeParser.ts";
export class AfterBlockSourceCodeParser implements SourceCodeParser {
	public constructor(
		blockBuilders: readonly [
			InStackBlockBranchConcreteSyntaxTreeNodeBuilder,
			...(readonly InStackBlockBranchConcreteSyntaxTreeNodeBuilder[]),
		],
	) {
		this.blockBuilders = blockBuilders;
	}
	private readonly blockBuilders: readonly [
		InStackBlockBranchConcreteSyntaxTreeNodeBuilder,
		...(readonly InStackBlockBranchConcreteSyntaxTreeNodeBuilder[]),
	];
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const [firstBlockBuilder, firstRestBlockBuilder, ...restRestBlockBuilders] =
			this.blockBuilders;
		if (firstRestBlockBuilder === undefined) {
			const result = new SuccessFeedingResult(
				new AfterFunctionSourceCodeParser(),
			);
		} else {
			const result = new SuccessFeedingResult(
				new AfterBlockSourceCodeParser([
					firstRestBlockBuilder,
					...restRestBlockBuilders,
				]),
			);
		}
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public finalizeFeeding(): null | SupportedFeedingFinalizingResult {
		throw new Error("Method not implemented.");
	}
}
