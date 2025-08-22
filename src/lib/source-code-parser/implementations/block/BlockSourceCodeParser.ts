import type {ParentBlockSourceCodeParser} from "./parent/ParentBlockSourceCodeParser.ts";
import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../characters/word/WordCharacter.ts";
import type {BlockBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/BlockBranchConcreteSyntaxTreeNode.ts";
import type {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/in-stack/InStackBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import type {SupportedFeedingFinalizingResult} from "../../feeding/finalizing/result/supported/SupportedFeedingFinalizingResult.ts";
import type {SupportedFeedingResult} from "../../feeding/result/supported/SupportedFeedingResult.ts";
export abstract class BlockSourceCodeParser
	implements SourceCodeParser, ParentBlockSourceCodeParser
{
	protected constructor(
		parentParser: ParentBlockSourceCodeParser,
		blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder,
	) {
		this.parentParser = parentParser;
		this.blockBuilder = blockBuilder;
	}
	protected blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder;
	public abstract feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SupportedFeedingResult;
	public abstract finalizeFeeding(): null | SupportedFeedingFinalizingResult;
	protected parentParser: ParentBlockSourceCodeParser;
	public abstract restore(
		block: BlockBranchConcreteSyntaxTreeNode,
	): BlockSourceCodeParser;
}
