import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import type {SourceFileContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./SourceFileContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class SourceFileContentFinalWhitespaceSegmentsParser implements Parser {
	private readonly partialConcreteSyntaxTree: SourceFileContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: SourceFileContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public finalize(): WhitespaceConcreteSyntaxTreeNode {
		const whitespace = createWhitespaceConcreteSyntaxTreeNode(
			this.sourceFileContentFinalWhitespaceSegments,
			{
				starting: this.sourceFileContentFinalWhitespaceSegmentsStartingIndex,
				ending: this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
			},
		);
		return whitespace;
	}
	public feedWithWhitespace(character: WhitespaceCharacter, index: Index) {
		const newSourceFileContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newSourceFileContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newSourceFileContentFinalWhitespaceSegmentsFirstSegment,
				this.sourceFileContentFinalWhitespaceSegments,
				{
					starting: index,
					ending: this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
				},
			);
		const sourceFileContentFinalWhitespaceSegmentsParser =
			new SourceFileContentFinalWhitespaceSegmentsParser(
				index,
				newSourceFileContentFinalWhitespaceSegments,
				this.sourceFileContentFinalWhitespaceSegmentsEndingIndex,
				this.sourceFileContentFinalWhitespaceEndingIndex,
				this.sourceFileContentEndingIndex,
			);
		return sourceFileContentFinalWhitespaceSegmentsParser;
	}
	public feedWithOpeningSquareBracket(): never {
		throw new Error(
			"Opening square bracket should not be present in final whitespace characters.",
		);
	}
	public feedWithClosingSquareBracket(): never {
		throw new Error(
			"Closing square bracket should not be present in final whitespace characters.",
		);
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error(
			"Opening curly bracket should not be present in final whitespace characters.",
		);
	}
	public feedWithClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockClosingBracket = createBlockClosingBracketConcreteSyntaxTreeNode(
			character,
			index,
		);
		const sourceFileContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.sourceFileContentFinalWhitespaceSegments,
				{
					starting: this.sourceFileContentFinalWhitespaceSegmentsStartingIndex,
					ending: this.sourceFileContentFinalWhitespaceEndingIndex,
				},
			);
		const blockContentParser = new BlockContentParser(
			blockClosingBracket,
			index,
			[] as const,
			index,
			index,
			null,
			index,
			sourceFileContentFinalWhitespace,
			this.sourceFileContentEndingIndex,
		);
		return blockContentParser;
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error(
			"Opening round bracket should not be present in final whitespace characters.",
		);
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error(
			"Closing round bracket should not be present in final whitespace characters.",
		);
	}
	public feedWithIdentifier(): never {
		throw new Error(
			"Identifier should not be present in final whitespace characters.",
		);
	}
	public feedWithOperator(): never {
		throw new Error(
			"Operator should not be present in final whitespace characters.",
		);
	}
}
