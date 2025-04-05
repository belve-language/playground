import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/FunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-opening-bracket/createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/createFunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import {FunctionCallKnownSegmentContentIdentifierSegmentsParser} from "../function-call-known-segment-content-identifier-segments/FunctionCallKnownSegmentContentIdentifierSegmentsParser.ts";
import type {FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser
	implements Parser
{
	public constructor(
		sourceFileContent: FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.sourceFileContent = sourceFileContent;
	}
	private readonly sourceFileContent: FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser {
		const newFunctionCallKnownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallKnownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallKnownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				this.functionCallKnownSegmentContentFinalWhitespaceSegments,
				{
					starting: index,
					ending:
						this.functionCallKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallKnownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				newFunctionCallKnownSegmentContentFinalWhitespaceSegments,
				this.functionCallKnownSegmentContentFinalWhitespaceSegmentsEndingIndex,
				this.functionCallKnownSegmentContentFinalWhitespaceEndingIndex,
				this.functionCallKnownSegmentContentEndingIndex,
				this.functionCallKnownSegmentClosingBracket,
				this.functionCallKnownSegmentEndingIndex,
				this.functionCallKnownStartingSegmentsRestSegments,
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
		return functionCallKnownSegmentContentFinalWhitespaceSegmentsParser;
	}
	public feedWithOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
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
	public feedWithOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): FunctionCallSegmentsParser {
		const functionCallKnownSegmentOpeningBracket =
			createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionCallKnownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallKnownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionCallKnownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionCallKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallKnownSegment =
			createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
				functionCallKnownSegmentOpeningBracket,
				functionCallKnownSegmentContentFinalWhitespace,
				this.functionCallKnownSegmentClosingBracket,
				{starting: index, ending: this.functionCallKnownSegmentEndingIndex},
			);
		const functionCallKnownStartingSegments: FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionCallKnownSegment,
				this.functionCallKnownStartingSegmentsRestSegments,
				{starting: index, ending: this.functionCallSegmentsEndingIndex},
			);
		const functionCallSegmentsParser = new FunctionCallSegmentsParser(
			index,
			functionCallKnownStartingSegments,
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
	public feedWithClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentIdentifierSegmentsParser {
		const functionCallKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallKnownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallKnownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallKnownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallKnownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionCallKnownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionCallKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionCallKnownSegmentContentIdentifierSegmentsParser =
			new FunctionCallKnownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallKnownSegmentContentIdentifierSegments,
				index,
				index,
				functionCallKnownSegmentContentFinalWhitespace,
				this.functionCallKnownSegmentContentEndingIndex,
				this.functionCallKnownSegmentClosingBracket,
				this.functionCallKnownSegmentEndingIndex,
				this.functionCallKnownStartingSegmentsRestSegments,
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
		return functionCallKnownSegmentContentIdentifierSegmentsParser;
	}
	public feedWithOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
