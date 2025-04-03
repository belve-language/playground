import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-content/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-opening-bracket/createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import type {FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				this.functionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting: index,
					ending:
						this
							.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				newFunctionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				this.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				this.functionHeaderUnknownSegmentContentIdentifier,
				this.functionHeaderUnknownSegmentContentFinalWhitespace,
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
		return functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(
		character: OpeningSquareBracketCharacter,
		index: Index,
	): FunctionHeaderSegmentsParser {
		const functionHeaderUnknownSegmentOpeningBracket =
			createFunctionHeaderUnknownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionHeaderUnknownSegmentContentInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionHeaderUnknownSegmentContentInitialWhitespaceEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContent: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentContentInitialWhitespace,
				this.functionHeaderUnknownSegmentContentIdentifier,
				this.functionHeaderUnknownSegmentContentFinalWhitespace,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionHeaderUnknownSegmentContentEndingIndex,
				},
			);
		const functionHeaderUnknownSegment: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentOpeningBracket,
				functionHeaderUnknownSegmentContent,
				this.functionHeaderUnknownSegmentClosingBracket,
				{starting: index, ending: this.functionHeaderUnknownSegmentEndingIndex},
			);
		const functionHeaderUnknownStartingSegments: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode =
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
	public parseClosingSquareBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingCurlyBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public parseIdentifier(): never {
		throw new Error("Not implemented.");
	}
	public parseOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
