import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../characters/word/WordCharacter.ts";
import {InStackBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/in-stack/InStackBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/with-opening-curly-bracket/WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WithoutBlockContentConcreteSyntaxTreeNodeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block-content/builders/without/WithoutBlockContentConcreteSyntaxTreeNodeNodeBuilder.ts";
import type {WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/functions/builders/with-separated-functions/WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-functions/builders/with-whitespace-1/WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-statements/builders/with-whitespace-1/WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/separated-function-header/builders/with-function/WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder.ts";
import {WhitespaceCharactersBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/whitespace-characters/WhitespaceCharactersBranchConcreteSyntaxTreeNode.ts";
import {WhitespaceCharacterLeafConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/leaf/implementations/whitespace-character/WhitespaceCharacterLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import {ErrorFeedingFinalizingResult} from "../../feeding/finalizing/result/implemenations/error/ErrorFeedingFinalizingResult.ts";
import {ErrorFeedingResult} from "../../feeding/result/implementations/error/ErrorFeedingResult.ts";
import {SuccessFeedingResult} from "../../feeding/result/implementations/success/SuccessFeedingResult.ts";
import {AfterBlockSourceCodeParser} from "../after-block/AfterBlockSourceCodeParser.ts";
import {AfterFunctionSourceCodeParser} from "../after-function/AfterFunctionSourceCodeParser.ts";
import {AfterWhitespaceCharactersBlockContentSourceCodeParser} from "../after-whitespace-characters-block-content/AfterWhitespaceCharactersBlockContentSourceCodeParser.ts";
import {AfterWordFunctionCallSegmentWordCharacterSourceCodeParser} from "../after-word-function-call-segment-word-character/AfterWordFunctionCallSegmentWordCharacterSourceCodeParser.ts";
import {AfterOpeningRoundBracketKnownFunctionCallSegmentSourceCodeParser} from "../after-opening-round-bracket-known-function-call-segment/AfterOpeningRoundBracketKnownFunctionCallSegmentSourceCodeParser.ts";
export class AfterBlockOpeningCurlyBracketCharacterSourceCodeParser
	implements SourceCodeParser
{
	public constructor(
		paddedFunctionsBuilder: WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder,
		functionsBuilder: WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder,
		functionBuilder: WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder,
		blockBuilders: readonly [
			InStackBlockBranchConcreteSyntaxTreeNodeBuilder,
			...(readonly InStackBlockBranchConcreteSyntaxTreeNodeBuilder[]),
		],
		blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder,
	) {
		this.paddedFunctionsBuilder = paddedFunctionsBuilder;
		this.functionsBuilder = functionsBuilder;
		this.functionBuilder = functionBuilder;
		this.blockBuilders = blockBuilders;
		this.blockBuilder = blockBuilder;
	}
	private readonly blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder;
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
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			"No known function header segment to close.",
		);
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			"No unknown function header segment to close.",
		);
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const result = new SuccessFeedingResult(
			new AfterBlockOpeningCurlyBracketCharacterSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				[
					// new WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder(
					// 	[
					// 		new OpeningCurlyBracketLeafConcreteSyntaxTreeNode(
					// 			character,
					// 			index,
					// 		),
					// 	],
					// 	index,
					// ),
					this.blockBuilder,
					...this.blockBuilders,
				],
				new WithOpeningCurlyBracketBlockBuilder(),
			),
		);
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const result = new SuccessFeedingResult(
			new AfterOpeningRoundBracketKnownFunctionCallSegmentSourceCodeParser(),
		);
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		// change to new parser everywhere else
		const newParser =
			new AfterOpeningSquareBracketUnknownFunctionCallSegmentSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
			);
		const result = new SuccessFeedingResult();
		return result;
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(
			character,
			index,
			`No statement to operate on in block starting at index ${this.blockBuilder.computeSpanIndexesStartingIndex().toString(10)}.`,
		);
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		const result = new SuccessFeedingResult(
			new AfterWhitespaceCharactersBlockContentSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
				new WhitespaceCharacterLeafConcreteSyntaxTreeNode(character, index),
				WhitespaceCharactersBranchConcreteSyntaxTreeNode.create(
					null,
					new WhitespaceCharacterLeafConcreteSyntaxTreeNode(character, index),
				),
			),
		);
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		const result = new SuccessFeedingResult(
			new AfterWordFunctionCallSegmentWordCharacterSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilders,
				this.blockBuilder,
				new WithoutBlockContentConcreteSyntaxTreeNodeNodeBuilder([], index),
				WithWhitespace1PaddedStatementsBranchConcreteSyntaxTreeNodeBuilder.create(
					null,
				),
			),
		);
	}
	public finalizeFeeding(): ErrorFeedingFinalizingResult {
		const result = new ErrorFeedingFinalizingResult(
			`The block starting at index ${this.blockBuilder.computeSpanIndexesStartingIndex().toString(10)} is not closed.`,
		);
	}
	private readonly functionBuilder: WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder;
	private readonly functionsBuilder: WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder;
	private readonly paddedFunctionsBuilder: WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder;
}
