import type {ClosingCurlyBracketCharacter} from "../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {ClosingRoundBracketCharacter} from "../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {OperatorCharacter} from "../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../characters/whitespace/WhitespaceCharacter.ts";
import type {WordCharacter} from "../../../characters/word/WordCharacter.ts";
import {BlockBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/block/BlockBranchConcreteSyntaxTreeNode.ts";
import {FunctionBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/function/FunctionBranchConcreteSyntaxTreeNode.ts";
import {PaddedStatementsBranchConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/branch/implementations/padded-statements/PaddedStatementsBranchConcreteSyntaxTreeNode.ts";
import {ClosingCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/leaf/implementations/closing-curly-bracket/ClosingCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import {OpeningCurlyBracketLeafConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/leaf/implementations/opening-curly-bracket/OpeningCurlyBracketLeafConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../index/Index.ts";
import type {SourceCodeParser} from "../../SourceCodeParser.ts";
import {ErrorFeedingFinalizingResult} from "../../feeding/finalizing/result/implemenations/error/ErrorFeedingFinalizingResult.ts";
import {SuccessFeedingFinalizingResult} from "../../feeding/finalizing/result/implemenations/success/SuccessFeedingFinalizingResult.ts";
import {ErrorFeedingResult} from "../../feeding/result/implementations/error/ErrorFeedingResult.ts";
import {SuccessFeedingResult} from "../../feeding/result/implementations/success/SuccessFeedingResult.ts";
export class ContentSourceCodeParser implements SourceCodeParser {
	public constructor() {}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const openingCurlyBracket =
			new OpeningCurlyBracketLeafConcreteSyntaxTreeNode(character, index);
		const newParser = new BlockContentSourceCodeParser(
			new FunctionBodyParser(
				new FunctionParser(
					new FunctionsParser(new PaddedFunctionsSourceCodeParser(this)),
				),
			),
			openingCurlyBracket,
		);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser = new KnownFunctionHeaderSegmentContentSourceCodeParser(
			this,
		);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser = new UnknownFunctionHeaderSegmentContentSourceCodeParser(
			this,
		);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser = new AfterWhitespaceCharactersContentSourceCodeParser(
			this,
		);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser =
			new AfterWordCharactersWordFunctionHeaderSegmentSourceCodeParser(this);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public finalizeFeeding(): null {
		return null;
	}
	public restoreAfterFunction(
		// block: BlockBranchConcreteSyntaxTreeNode,
		function_: FunctionBranchConcreteSyntaxTreeNode,
	): AfterFunctionSourceCodeParser {
		const newParser = new AfterFunctionSourceCodeParser();
		return newParser;
	}
}
class AfterWordCharactersWordFunctionHeaderSegmentSourceCodeParser
	implements SourceCodeParser
{
	public constructor() {}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const openingCurlyBracket =
			new OpeningCurlyBracketLeafConcreteSyntaxTreeNode(character, index);
		const newParser = new BlockContentSourceCodeParser(
			this,
			openingCurlyBracket,
		);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		const newParser =
			new AfterWordCharactersWordFunctionHeaderSegmentSourceCodeParser();
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public finalizeFeeding(): ErrorFeedingFinalizingResult {
		const result = ErrorFeedingFinalizingResult.create("");
		return result;
	}
	public restore(
		block: BlockBranchConcreteSyntaxTreeNode,
	): AfterFunctionSourceCodeParser {
		const function_ = FunctionBranchConcreteSyntaxTreeNode.create();
		const newParser = new AfterFunctionSourceCodeParser();
		return newParser;
	}
}
class BlockContentSourceCodeParser implements SourceCodeParser {
	public constructor(
		parentParser:
			| AfterWordCharactersWordFunctionHeaderSegmentSourceCodeParser
			| BlockContentSourceCodeParser
			| ContentSourceCodeParser,
		openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode,
	) {
		this.parentParser = parentParser;
		this.openingCurlyBracket = openingCurlyBracket;
	}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const closingCurlyBracket =
			new ClosingCurlyBracketLeafConcreteSyntaxTreeNode(character, index);
		const block = BlockBranchConcreteSyntaxTreeNode.create(
			this.openingCurlyBracket,
			null,
			closingCurlyBracket,
		);
		const newParser = this.parentParser.restore(block);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public finalizeFeeding(): ErrorFeedingFinalizingResult {
		const result = ErrorFeedingFinalizingResult.create("");
		return result;
	}
	private readonly openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode;
	private readonly parentParser:
		| AfterWordCharactersWordFunctionHeaderSegmentSourceCodeParser
		| BlockContentSourceCodeParser
		| ContentSourceCodeParser;
	public restore(
		block: BlockBranchConcreteSyntaxTreeNode,
	): AfterBlockStatementSourceCodeParser {
		const newParser = new AfterBlockStatementSourceCodeParser(
			this,
			this.openingCurlyBracket,
		);
		return newParser;
	}
}
class AfterBlockStatementSourceCodeParser implements SourceCodeParser {
	public constructor(
		parentParser: BlockContentSourceCodeParser | ContentSourceCodeParser,
		openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode,
	) {
		this.parentParser = parentParser;
		this.openingCurlyBracket = openingCurlyBracket;
	}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		const paddedStatements =
			PaddedStatementsBranchConcreteSyntaxTreeNode.create();
		const closingCurlyBracket =
			new ClosingCurlyBracketLeafConcreteSyntaxTreeNode(character, index);
		const block = BlockBranchConcreteSyntaxTreeNode.create(
			this.openingCurlyBracket,
			paddedStatements,
			closingCurlyBracket,
		);
		const newParser = this.parentParser.restore(block);
		const result = new SuccessFeedingResult(newParser);
		return result;
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): ErrorFeedingResult {
		throw new Error("Method not implemented.");
	}
	public finalizeFeeding(): ErrorFeedingFinalizingResult {
		const result = ErrorFeedingFinalizingResult.create("");
		return result;
	}
	private readonly openingCurlyBracket: OpeningCurlyBracketLeafConcreteSyntaxTreeNode;
	private readonly parentParser:
		| BlockContentSourceCodeParser
		| ContentSourceCodeParser;
}
class AfterFunctionSourceCodeParser implements SourceCodeParser {
	public constructor() {}
	public feedWithClosingCurlyBracketCharacter(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithClosingRoundBracketCharacter(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithClosingSquareBracketCharacter(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithOpeningCurlyBracketCharacter(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningRoundBracketCharacter(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningSquareBracketCharacter(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithOperatorCharacter(
		character: OperatorCharacter,
		index: Index,
	): ErrorFeedingResult {
		const result = new ErrorFeedingResult(character, index, "");
		return result;
	}
	public feedWithWhitespaceCharacter(
		character: WhitespaceCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public feedWithWordCharacter(
		character: WordCharacter,
		index: Index,
	): SuccessFeedingResult {
		throw new Error("Method not implemented.");
	}
	public finalizeFeeding(): SuccessFeedingFinalizingResult {
		const result = SuccessFeedingFinalizingResult.create();
		return result;
	}
}
