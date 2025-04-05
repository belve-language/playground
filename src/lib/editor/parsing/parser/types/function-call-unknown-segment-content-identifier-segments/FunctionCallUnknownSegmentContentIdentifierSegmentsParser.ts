import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../index/Index.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser} from "../function-call-unknown-segment-content-initial-whitespace-segments/FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-opening-bracket/createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree} from "./FunctionCallUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallUnknownSegmentContentIdentifierSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const functionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallUnknownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionCallUnknownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionCallUnknownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				functionCallUnknownSegmentContentInitialWhitespaceSegments,
				index,
				index,
				functionCallUnknownSegmentContentIdentifier,
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
		const functionCallUnknownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionCallUnknownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionCallUnknownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionCallUnknownSegmentContent =
			createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
				null,
				functionCallUnknownSegmentContentIdentifier,
				this.functionCallUnknownSegmentContentFinalWhitespace,
				{
					starting:
						this
							.functionCallUnknownSegmentContentIdentifierSegmentsStartingIndex,
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
		throw new Error(
			"Closing square bracket not allowed in unknown function call segment.",
		);
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error(
			"Opening curly bracket not allowed in unknown function call segment.",
		);
	}
	public feedWithClosingCurlyBracket(): never {
		throw new Error(
			"Closing curly bracket not allowed in unknown function call segment.",
		);
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error(
			"Opening round bracket not allowed in unknown function call segment.",
		);
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error(
			"Closing round bracket not allowed in unknown function call segment.",
		);
	}
	public feedWithIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentIdentifierSegmentsParser {
		const newFunctionCallUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionCallUnknownSegmentContentIdentifierSegmentsFirstSegment,
				this.functionCallUnknownSegmentContentIdentifierSegments,
				{
					starting: index,
					ending:
						this.functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				newFunctionCallUnknownSegmentContentIdentifierSegments,
				this.functionCallUnknownSegmentContentIdentifierSegmentsEndingIndex,
				this.functionCallUnknownSegmentContentIdentifierEndingIndex,
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
		return functionCallUnknownSegmentContentIdentifierSegmentsParser;
	}
	public feedWithOperator(): never {
		throw new Error("Unexpected operator in unknown function call segment.");
	}
	public finalize(): never {
		throw new Error(
			"Unexpected end of input in unknown function call segment.",
		);
	}
}
