import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser} from "../function-header-unknown-segment-content-identifier-segments/FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser.ts";
import type {FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public parseWhitespace(character: WhitespaceCharacter, index: Index) {
		const newFunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderUnknownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceSegments,
				{
					starting: index,
					ending:
						this.functionHeaderUnknownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				newFunctionHeaderUnknownSegmentContentFinalWhitespaceSegments,
				this.functionHeaderUnknownSegmentContentFinalWhitespaceEndingIndex,
				this.functionHeaderUnknownSegmentContentEndingIndex,
				this.functionHeaderUnknownSegmentClosingBracket,
				this.functionHeaderUnknownSegmentEndingIndex,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderSegmentsEndingIndex,
				this.functionHeaderFinalWhitespace,
				this.functionHeaderEndingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Unexpected opening square bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseClosingSquareBracket(): never {
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content final whitespace characters.",
		);
	}
	public parseIdentifier<CurrentCharacter extends IdentifierCharacter>(
		character: CurrentCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser {
		const functionHeaderUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderUnknownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderUnknownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionHeaderUnknownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionHeaderUnknownSegmentContentIdentifierSegments,
				index,
				functionHeaderUnknownSegmentContentFinalWhitespace,
				this.functionHeaderUnknownSegmentContentEndingIndex,
				this.functionHeaderUnknownSegmentClosingBracket,
				this.functionHeaderUnknownSegmentEndingIndex,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				this.functionHeaderSegmentsEndingIndex,
				this.functionHeaderFinalWhitespace,
				this.functionHeaderEndingIndex,
				this.functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionHeaderUnknownSegmentContentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error(
			"Unexpected operator character in function header unknown segment content final whitespace characters.",
		);
	}
	public finalize(): never {
		throw new Error(
			"Unexpected end of function header unknown segment content.",
		);
	}
}
