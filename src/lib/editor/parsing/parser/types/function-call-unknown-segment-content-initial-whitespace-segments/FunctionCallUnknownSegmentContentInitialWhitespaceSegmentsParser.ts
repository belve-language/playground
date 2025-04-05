import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-opening-bracket/createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "../function-call-known-segment-content-initial-whitespace-segments/FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionCallKnownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const newFunctionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallUnknownSegmentContentInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				this.functionCallUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting: index,
					ending:
						this
							.functionCallUnknownSegmentContentInitialWhitespaceSegmentsEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				newFunctionCallUnknownSegmentContentInitialWhitespaceSegments,
				this.functionCallUnknownSegmentContentInitialWhitespaceSegmentsEndingIndex,
				this.functionCallUnknownSegmentContentInitialWhitespaceEndingIndex,
				this.functionCallUnknownSegmentContentIdentifier,
				this.functionCallUnknownSegmentContentFinalWhitespace,
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
		return functionCallUnknownSegmentContentInitialWhitespaceSegmentsParser;
	}
	public feedWithOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionCallSegmentsParser {
		const functionCallUnknownSegmentOpeningBracket =
			createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionCallUnknownSegmentContentInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending:
						this.functionCallUnknownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionCallUnknownSegmentContent =
			createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentInitialWhitespace,
				this.functionCallUnknownSegmentContentIdentifier,
				this.functionCallUnknownSegmentContentFinalWhitespace,
				{
					starting:
						this
							.functionCallUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionCallUnknownSegmentContentEndingIndex,
				},
			);
		const functionCallUnknownSegment =
			createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
				functionCallUnknownSegmentOpeningBracket,
				functionCallUnknownSegmentContent,
				this.functionCallUnknownSegmentClosingBracket,
				{starting: index, ending: this.functionCallUnknownSegmentEndingIndex},
			);
		const functionCallUnknownStartingSegments =
			createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegment,
				this.functionCallUnknownStartingSegmentsRestSegments,
				{starting: index, ending: this.functionCallSegmentsEndingIndex},
			);
		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			index,
			functionCallUnknownStartingSegments,
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
		return functionCallSegmentsParser;
	}
	public feedWithClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithIdentifier(): never {
		throw new Error("Not implemented.");
	}
	public feedWithOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
