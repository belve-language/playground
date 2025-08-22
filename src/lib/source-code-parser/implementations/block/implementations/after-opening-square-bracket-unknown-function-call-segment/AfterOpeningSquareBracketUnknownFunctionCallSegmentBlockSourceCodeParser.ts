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
import type {WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder} from "../../../../../concrete-syntax-tree-node/implementations/branch/implementations/block/builders/in-stack/InStackBlockBranchConcreteSyntaxTreeNodeBuilder.ts";
import type {Index} from "../../../../../index/Index.ts";
import type {SupportedFeedingFinalizingResult} from "../../../../feeding/finalizing/result/supported/SupportedFeedingFinalizingResult.ts";
import type {SupportedFeedingResult} from "../../../../feeding/result/supported/SupportedFeedingResult.ts";
import {BlockSourceCodeParser} from "../../BlockSourceCodeParser.ts";
import type {ParentBlockSourceCodeParser} from "../../parent/ParentBlockSourceCodeParser.ts";
export class AfterOpeningSquareBracketUnknownFunctionCallSegmentBlockSourceCodeParser extends BlockSourceCodeParser {
	public constructor(
		parentParser: ParentBlockSourceCodeParser,
		blockBuilder: WithOpeningCurlyBracketBlockBranchConcreteSyntaxTreeNodeBuilder,
	) {
		super(parentParser, blockBuilder);
	}
	public override feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SupportedFeedingResult {
		throw new Error("Method not implemented.");
	}
	public override finalizeFeeding(): null | SupportedFeedingFinalizingResult {
		throw new Error("Method not implemented.");
	}
	public override restore(
		block: BlockBranchConcreteSyntaxTreeNode,
	): BlockSourceCodeParser {
		throw new Error("Method not implemented.");
	}
}
