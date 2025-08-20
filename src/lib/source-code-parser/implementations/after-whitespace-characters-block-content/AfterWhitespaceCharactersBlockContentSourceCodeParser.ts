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
import type {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/with-opening-curly-bracket/WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/functions/builders/with-separated-functions/WithSeparatedFunctionsFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-functions/builders/with-whitespace-1/WithWhitespace1PaddedFunctionsBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/separated-function-header/builders/with-function/WithSeparatedFunctionHeaderFunctionBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {WhitespaceCharactersBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/whitespace-characters/WhitespaceCharactersBranchConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import type {SupportedFeedingFinalizingResult} from "../../feeding/finalizing/result/supported/SupportedFeedingFinalizingResult.ts";
import type {SupportedFeedingResult} from "../../feeding/result/supported/SupportedFeedingResult.ts";
export class AfterWhitespaceCharactersBlockContentSourceCodeParser
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
		whitespaceCharacters: WhitespaceCharactersBranchConcreteSyntaxTreeNode,
	) {
		this.paddedFunctionsBuilder = paddedFunctionsBuilder;
		this.functionsBuilder = functionsBuilder;
		this.functionBuilder = functionBuilder;
		this.blockBuilders = blockBuilders;
		this.blockBuilder = blockBuilder;
		this.whitespaceCharacters = whitespaceCharacters;
	}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
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
	private readonly whitespaceCharacters: WhitespaceCharactersBranchConcreteSyntaxTreeNode;
}
