import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-opening-bracket/createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment/createFunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser} from "../function-call-known-segment-content-final-whitespace-segments/FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {FunctionCallKnownSegmentContentIdentifierSegmentsParser} from "../function-call-known-segment-content-identifier-segments/FunctionCallKnownSegmentContentIdentifierSegmentsParser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import type {FunctionCallKnownSegmentContentParserPartialConcreteSyntaxTree} from "./FunctionCallKnownSegmentContentParserPartialConcreteSyntaxTree.ts";
export class FunctionCallKnownSegmentContentParser implements Parser {
	public constructor(
		partialConcreteSyntaxTree: FunctionCallKnownSegmentContentParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	private readonly partialConcreteSyntaxTree: FunctionCallKnownSegmentContentParserPartialConcreteSyntaxTree;
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser {
		const functionCallKnownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallKnownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallKnownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallKnownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallKnownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionCallKnownSegmentContentFinalWhitespaceSegments,
				index,
				index,
				index,
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
	public parseOpeningSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningRoundBracket(
		character: OpeningRoundBracketCharacter,
		index: Index,
	): FunctionCallSegmentsParser {
		const functionCallKnownSegmentOpeningBracket =
			createFunctionCallKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionCallKnownSegment =
			createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
				functionCallKnownSegmentOpeningBracket,
				null,
				this.functionCallKnownSegmentClosingBracket,
				{starting: index, ending: this.functionCallKnownSegmentEndingIndex},
			);
		const functionCallKnownStartingSegments =
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
	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseIdentifier(
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
		const functionCallKnownSegmentContentIdentifierSegmentsParser =
			new FunctionCallKnownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallKnownSegmentContentIdentifierSegments,
				index,
				index,
				null,
				index,
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
	public parseOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
