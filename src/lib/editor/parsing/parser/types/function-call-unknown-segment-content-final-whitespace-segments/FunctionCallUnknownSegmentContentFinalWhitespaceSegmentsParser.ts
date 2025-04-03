import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import type {Index} from "../../../../index/Index.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentIdentifierSegmentsParser} from "../function-call-unknown-segment-content-identifier-segments/FunctionCallUnknownSegmentContentIdentifierSegmentsParser.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser {
		const newFunctionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallUnknownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				this.functionCallUnknownSegmentContentFinalWhitespaceSegments,
				{
					starting: index,
					ending:
						this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				newFunctionCallUnknownSegmentContentFinalWhitespaceSegments,
				this.functionCallUnknownSegmentContentFinalWhitespaceSegmentsEndingIndex,
				this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
				this.functionCallUnknownSegmentContentEndingIndex,
				this.functionCallUnknownSegmentClosingBracket,
				this.functionCallUnknownSegmentEndingIndex,
				this.functionCallUnknownStartingSegmentsRestSegments,
				this.functionCallSegmentsEndingIndex,
				this.functionCallEndingIndex,
				this.statementsRestStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
				this.blockStack,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error(
			"Opening square bracket not allowed in unknown function call segment.",
		);
	}
	public parseClosingSquareBracket(): never {
		throw new Error(
			"Closing square bracket not allowed in unknown function call segment.",
		);
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Opening curly bracket not allowed in unknown function call segment.",
		);
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Closing curly bracket not allowed in unknown function call segment.",
		);
	}
	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Opening round bracket not allowed in unknown function call segment.",
		);
	}
	public parseClosingRoundBracket(): never {
		throw new Error(
			"Closing round bracket not allowed in unknown function call segment.",
		);
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentIdentifierSegmentsParser {
		const functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallUnknownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallUnknownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionCallUnknownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionCallUnknownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallUnknownSegmentContentIdentifierSegments,
				index,
				index,
				functionCallUnknownSegmentContentFinalWhitespace,
				this.functionCallUnknownSegmentContentEndingIndex,
				this.functionCallUnknownSegmentClosingBracket,
				this.functionCallUnknownSegmentEndingIndex,
				this.functionCallUnknownStartingSegmentsRestSegments,
				this.functionCallSegmentsEndingIndex,
				this.functionCallEndingIndex,
				this.statementsRestStatements,
				this.statementsEndingIndex,
				this.blockContentFinalWhitespace,
				this.blockContentEndingIndex,
				this.blockClosingBracket,
				this.blockEndingIndex,
				this.blockStack,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return functionCallUnknownSegmentContentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error("Operator not allowed in unknown function call segment.");
	}
	public finalize(): never {
		throw new Error(
			"Unexpected end of input in unknown function call segment.",
		);
	}
}
