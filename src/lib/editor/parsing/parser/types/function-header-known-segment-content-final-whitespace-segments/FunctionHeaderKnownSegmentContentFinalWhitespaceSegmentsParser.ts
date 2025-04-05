import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import type {IdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/IdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentIdentifierSegmentsParser} from "../function-header-known-segment-content-identifier-segments/FunctionHeaderKnownSegmentContentIdentifierSegmentsParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import type {FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser {
		const newFunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderKnownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				this.functionHeaderKnownSegmentContentFinalWhitespaceSegments,
				{
					starting: index,
					ending:
						this.functionHeaderKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				newFunctionHeaderKnownSegmentContentFinalWhitespaceSegments,
				this.functionHeaderKnownSegmentContentFinalWhitespaceEndingIndex,
				this.functionHeaderKnownSegmentContentEndingIndex,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
		return functionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser;
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
	): FunctionHeaderSegmentsParser {
		const functionHeaderKnownSegmentOpeningBracket =
			createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionHeaderKnownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderKnownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionHeaderKnownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionHeaderKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionHeaderKnownSegment =
			createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentOpeningBracket,
				functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentClosingBracket,
				{starting: index, ending: this.functionHeaderKnownSegmentEndingIndex},
			);
		const functionHeaderKnownStartingSegments: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode =
			createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentRestSegments,
				{starting: index, ending: this.functionHeaderSegmentsEndingIndex},
			);
		const functionHeaderSegmentsParser = new FunctionHeaderSegmentsParser(
			index,
			functionHeaderKnownStartingSegments,
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
	public feedWithClosingRoundBracket(): never {
		throw new Error("Not implemented.");
	}
	public feedWithIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentIdentifierSegmentsParser {
		const functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentIdentifierSegments: IdentifierSegmentsConcreteSyntaxTreeNode =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderKnownSegmentContentFinalWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionHeaderKnownSegmentContentFinalWhitespaceSegments,
				{
					starting:
						this
							.functionHeaderKnownSegmentContentFinalWhitespaceSegmentsStartingIndex,
					ending:
						this.functionHeaderKnownSegmentContentFinalWhitespaceEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderKnownSegmentContentIdentifierSegmentsParser(
				index,
				functionHeaderKnownSegmentContentIdentifierSegments,
				index,
				functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentContentEndingIndex,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentRestSegments,
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
		return functionHeaderKnownSegmentContentIdentifierSegmentsParser;
	}
	public feedWithOperator(): never {
		throw new Error("Not implemented.");
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
