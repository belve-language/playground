import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../characters/word/WordCharacter.ts";
import type {WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-functions/builders/with-whitespace-1/WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import {ErrorFeedingFinalizingResult} from "../../feeding/finalizing/result/implemenations/error/ErrorFeedingFinalizingResult.ts";
import {ErrorFeedingResult} from "../../feeding/result/implementations/error/ErrorFeedingResult.ts";
import {SuccessFeedingResult} from "../../feeding/result/implementations/success/SuccessFeedingResult.ts";
export class AfterBlockOpeningCurlyBracketCharacterSourceCodeParser
	implements SourceCodeParser
{
	public constructor(
		paddedFunctionsBuilder: WithWhitespace1PaddedFunctionsBuilder,
		functionsBuilder: WithSeparatedFunctionsFunctionsBuilder,
		functionBuilder: WithSeparatedFunctionHeaderFunctionBuilder,
		blockBuildersStack: readonly WithOpeningCurlyBracketBlockBuilder[],
		blockBuilder: WithOpeningCurlyBracketBlockBuilder,
	) {
		this.paddedFunctionsBuilder = paddedFunctionsBuilder;
		this.functionsBuilder = functionsBuilder;
		this.functionBuilder = functionBuilder;
		this.inStackBlockBuilders = blockBuildersStack;
		this.blockBuilder = blockBuilder;
	}
	private readonly blockBuilder: WithOpeningCurlyBracketBlockBuilder;
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const [firstInStackBlockBuilder, ...restInStackBlockBuilders] =
			this.inStackBlockBuilders;
		if (firstInStackBlockBuilder === undefined) {
			return new SuccessFeedingResult(new AfterFunctionParser());
		} else {
			return new SuccessFeedingResult(new AfterBlockStatementParser());
		}
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		return new ErrorFeedingResult(
			character,
			index,
			"No known function header segment to close.",
		);
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		return new ErrorFeedingResult(
			character,
			index,
			"No unknown function header segment to close.",
		);
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		return new SuccessFeedingResult(
			new AfterBlockOpeningCurlyBracketCharacterSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				new WithOpeningCurlyBracketBlockBuilder(),
			),
		);
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		return new SuccessFeedingResult(
			new AfterKnownFunctionCallSegmentOpeningRoundBracketParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
			),
		);
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		return new SuccessFeedingResult(
			new AfterUnknownFunctionCallSegmentOpeningSquareBracketParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
			),
		);
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		return new ErrorFeedingResult(
			character,
			index,
			`No statement to operate on in block starting at index ${this.blockBuilder.startingIndex.toString(10)}.`,
		);
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		return new SuccessFeedingResult(
			new AfterWhitespaceCharacterAfterBlockOpeningCurlyBracketCharacterSourceCodeParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
				new WhitespaceCharacterLeafConcreteSyntaxTreeNode(character, index),
			),
		);
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		return new SuccessFeedingResult(
			new AfterWordFunctionCallSegmentWordCharacterParser(
				this.paddedFunctionsBuilder,
				this.functionsBuilder,
				this.functionBuilder,
				this.blockBuilder,
				new WordCharacterLeafConcreteSyntaxTreeNode(character, index),
			),
		);
	}
	public finalizeFeeding(): ErrorFeedingFinalizingResult {
		return new ErrorFeedingFinalizingResult(
			`The block starting at index ${this.blockBuilder.startingIndex.toString(10)} is not closed.`,
		);
	}
	private readonly functionBuilder: WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder;
	private readonly functionsBuilder: WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder;
	private readonly inStackBlockBuilders: readonly WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder[];
	private readonly paddedFunctionsBuilder: WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder;
}
