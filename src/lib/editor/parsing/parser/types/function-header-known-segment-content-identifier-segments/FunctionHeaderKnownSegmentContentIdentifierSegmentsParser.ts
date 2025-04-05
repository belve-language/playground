import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-content/createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser} from "../function-header-known-segment-content-initial-whitespace-segments/FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import type {FunctionHeaderKnownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree} from "./FunctionHeaderKnownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderKnownSegmentContentIdentifierSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser {
		const functionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderKnownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionHeaderKnownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				functionHeaderKnownSegmentContentInitialWhitespaceSegments,
				index,
				functionHeaderKnownSegmentContentIdentifier,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentsRestSegments,
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
		return functionHeaderKnownSegmentContentInitialWhitespaceSegmentsParser;
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
		const functionHeaderKnownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionHeaderKnownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContent =
			createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
				null,
				functionHeaderKnownSegmentContentIdentifier,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				{
					starting:
						this
							.functionHeaderKnownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderKnownSegmentContentEndingIndex,
				},
			);
		const functionHeaderKnownSegment =
			createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentOpeningBracket,
				functionHeaderKnownSegmentContent,
				this.functionHeaderKnownSegmentClosingBracket,
				{starting: index, ending: this.functionHeaderKnownSegmentEndingIndex},
			);
		const functionHeaderKnownStartingSegments =
			createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegment,
				this.functionHeaderKnownStartingSegmentsRestSegments,
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
		const newFunctionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderKnownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment,
				this.functionHeaderKnownSegmentContentIdentifierSegments,
				{
					starting: index,
					ending: this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderKnownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderKnownSegmentContentIdentifierSegmentsParser(
				index,
				newFunctionHeaderKnownSegmentContentIdentifierSegments,
				this.functionHeaderKnownSegmentContentIdentifierEndingIndex,
				this.functionHeaderKnownSegmentContentFinalWhitespace,
				this.functionHeaderKnownSegmentContentEndingIndex,
				this.functionHeaderKnownSegmentClosingBracket,
				this.functionHeaderKnownSegmentEndingIndex,
				this.functionHeaderKnownStartingSegmentsRestSegments,
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
