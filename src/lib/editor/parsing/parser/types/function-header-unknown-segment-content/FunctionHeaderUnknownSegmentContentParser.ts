import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-opening-bracket/createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser} from "../function-header-unknown-segment-content-final-whitespace-segments/FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser} from "../function-header-unknown-segment-content-identifier-segments/FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser.ts";
import type {FunctionHeaderUnknownSegmentContentParserPartialConcreteSyntaxTree} from "./FunctionHeaderUnknownSegmentContentParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderUnknownSegmentContentParser implements Parser {
	private readonly partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser {
		const functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderUnknownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionHeaderUnknownSegmentContentFinalWhitespaceSegments,
				index,
				index,
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
	public feedWithOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionHeaderSegmentsParser {
		const functionHeaderUnknownSegmentOpeningBracket =
			createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionHeaderUnknownSegment =
			createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentOpeningBracket,
				null,
				this.functionHeaderUnknownSegmentClosingBracket,
				{starting: index, ending: this.functionHeaderUnknownSegmentEndingIndex},
			);
		const functionHeaderUnknownStartingSegments =
			createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderUnknownSegment,
				this.functionHeaderUnknownStartingSegmentsRestSegments,
				{starting: index, ending: this.functionHeaderSegmentsEndingIndex},
			);
		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			index,
			functionHeaderUnknownStartingSegments,
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
		return functionHeaderSegmentsParser;
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
	public feedWithIdentifier(
		character: IdentifierCharacter,
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
		const functionHeaderUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionHeaderUnknownSegmentContentIdentifierSegments,
				index,
				null,
				index,
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
	public feedWithOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
