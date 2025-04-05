import type {ClosingCurlyBracketCharacter} from "../../../../characters/closing-curly-bracket/ClosingCurlyBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createBlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/createBlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {BlockContentParser} from "../block-content/BlockContentParser.ts";
import {SourceFileContentFinalWhitespaceSegmentsParser} from "../source-file-content-final-whitespace-segments/SourceFileContentFinalWhitespaceSegmentsParser.ts";
export class SourceFileContentParser implements Parser {
	public constructor() {}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): SourceFileContentFinalWhitespaceSegmentsParser {
		const sourceFileContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const sourceFileContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				sourceFileContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const sourceFileContentFinalWhitespaceSegmentsParser =
			new SourceFileContentFinalWhitespaceSegmentsParser(
				index,
				sourceFileContentFinalWhitespaceSegments,
				index,
				index,
				index,
			);
		return sourceFileContentFinalWhitespaceSegmentsParser;
	}
	public feedWithOpeningSquareBracket(): never {
		throw new Error(
			"OpeningSquareBracketCharacter is not allowed in SourceFileContent.",
		);
	}
	public feedWithClosingSquareBracket(): never {
		throw new Error(
			"ClosingSquareBracketCharacter is not allowed in SourceFileContent.",
		);
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error(
			"OpeningCurlyBracketCharacter is not allowed in SourceFileContent.",
		);
	}
	public feedWithClosingCurlyBracket(
		character: ClosingCurlyBracketCharacter,
		index: Index,
	): BlockContentParser {
		const blockContentParser = new BlockContentParser({
			children: [
				{
					children: [
						{
							children: [
								{
									children: [
										{
											children: [
												createBlockClosingBracketConcreteSyntaxTreeNode(
													character,
													index,
												),
											],
											endingIndex: index,
										},
										[],
									],
									endingIndex: index,
								},
							],
							endingIndex: index,
						},
						null,
					],
					endingIndex: index,
				},
				null,
			],
			endingIndex: index,
		});
		return blockContentParser;
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error(
			"OpeningRoundBracketCharacter is not allowed in SourceFileContent.",
		);
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error(
			"ClosingRoundBracketCharacter is not allowed in SourceFileContent.",
		);
	}
	public feedWithIdentifier(): never {
		throw new Error("IdentifierCharacter is not allowed in SourceFileContent.");
	}
	public feedWithOperator(): never {
		throw new Error("OperatorCharacter is not allowed in SourceFileContent.");
	}
	public finalize(): null {
		return null;
	}
}
