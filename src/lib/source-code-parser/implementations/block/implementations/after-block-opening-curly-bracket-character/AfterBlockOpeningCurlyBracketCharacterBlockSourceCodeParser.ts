import type {ClosingCurlyBracketCharacter} from "../../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../../../characters/word/WordCharacter.ts";
import type {BlockBranchConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/branch/implementations/block/BlockBranchConcreteSyntaxTreeNode.ts";
import {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/in-stack/InStackBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder} from "../../../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-operated-statements/builders/with-whitespace-1/WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WhitespaceCharactersBranchConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/branch/implementations/whitespace-characters/WhitespaceCharactersBranchConcreteSyntaxTreeNode.ts";
import {ClosingCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/leaf/implementations/closing-curly-bracket/ClosingCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import {OpeningCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/leaf/implementations/opening-curly-bracket/OpeningCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import {WhitespaceCharacterLeafConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/leaf/implementations/whitespace-character/WhitespaceCharacterLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../../index/Index.ts";
import {ErrorFeedingFinalizingResult} from "../../../../feeding/finalizing/result/implemenations/error/ErrorFeedingFinalizingResult.ts";
import {ErrorFeedingResult} from "../../../../feeding/result/implementations/error/ErrorFeedingResult.ts";
import {SuccessFeedingResult} from "../../../../feeding/result/implementations/success/SuccessFeedingResult.ts";
import {BlockSourceCodeParser} from "../../BlockSourceCodeParser.ts";
import type {ParentBlockSourceCodeParser} from "../../parent/ParentBlockSourceCodeParser.ts";
import {AfterOpeningRoundBracketKnownFunctionCallSegmentBlockSourceCodeParser} from "../after-opening-round-bracket-known-function-call-segment/AfterOpeningRoundBracketKnownFunctionCallSegmentBlockSourceCodeParser.ts";
import {AfterOpeningSquareBracketUnknownFunctionCallSegmentBlockSourceCodeParser} from "../after-opening-square-bracket-unknown-function-call-segment/AfterOpeningSquareBracketUnknownFunctionCallSegmentBlockSourceCodeParser.ts";
import {AfterWhitespaceCharactersBlockContentBlockSourceCodeParser} from "../after-whitespace-characters-block-content/AfterWhitespaceCharactersBlockContentBlockSourceCodeParser.ts";
import {AfterWordFunctionCallSegmentWordCharacterBlockSourceCodeParser} from "../after-word-function-call-segment-word-character/AfterWordFunctionCallSegmentWordCharacterBlockSourceCodeParser.ts";
export class AfterBlockOpeningCurlyBracketCharacterBlockSourceCodeParser extends BlockSourceCodeParser {
	public constructor(
		parentParser: ParentBlockSourceCodeParser,
		blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder,
	) {
		super(parentParser, blockBuilder);
	}
	public override feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const blockContent = null;
		const closingCurlyBracket =
			new ClosingCurlyBracketLeafConcreteSyntaxTreeNode(character, index);
		const block = this.blockBuilder.build(blockContent, closingCurlyBracket);
		const newParser = this.parentParser.restore(block);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			"No known function header segment to close.",
		);
		return result;
	}
	public override feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			"No unknown function header segment to close.",
		);
		return result;
	}
	public override feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const blockBuilder =
			WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder.create(
				new OpeningCurlyBracketLeafConcreteSyntaxTreeNode(character, index),
			);
		const newParser =
			new AfterBlockOpeningCurlyBracketCharacterBlockSourceCodeParser(
				this,
				blockBuilder,
			);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser =
			new AfterOpeningRoundBracketKnownFunctionCallSegmentBlockSourceCodeParser(
				this.parentParser,
				this.blockBuilder,
			);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser =
			new AfterOpeningSquareBracketUnknownFunctionCallSegmentBlockSourceCodeParser(
				this.parentParser,
				this.blockBuilder,
			);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			`No statement to operate on in block starting at index ${this.blockBuilder.computeSpanIndexesStartingIndex().toString(10)}.`,
		);
		return result;
	}
	public override feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		const whitespaceCharacter =
			new WhitespaceCharacterLeafConcreteSyntaxTreeNode(character, index);
		const whitespaceCharacters =
			WhitespaceCharactersBranchConcreteSyntaxTreeNode.create(
				null,
				whitespaceCharacter,
			);
		const newParser =
			new AfterWhitespaceCharactersBlockContentBlockSourceCodeParser(
				this.parentParser,
				this.blockBuilder,
				whitespaceCharacters,
			);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		const paddedStatementsBuilder =
			WithWhitespace1PaddedOperatedStatementsBranchConcreteSyntaxTreeNodeBuilder.create(
				null,
			);
		const newParser =
			new AfterWordFunctionCallSegmentWordCharacterBlockSourceCodeParser(
				this.parentParser,
				this.blockBuilder,
				paddedStatementsBuilder,
			);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public override finalizeFeeding(): ErrorFeedingFinalizingResult {
		const result = new ErrorFeedingFinalizingResult(
			`The block starting at index ${this.blockBuilder.computeSpanIndexesStartingIndex().toString(10)} is not closed.`,
		);
		return result;
	}
	public override restore(
		block: BlockBranchConcreteSyntaxTreeNode,
	): BlockSourceCodeParser {
		throw new Error("Method not implemented.");
	}
}
