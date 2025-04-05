import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningRoundBracketCharacter} from "../../../../characters/opening-round-bracket/OpeningRoundBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser} from "../function-header-known-segment-content-final-whitespace-segments/FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-segment-opening-bracket/createFunctionHeaderKnownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {FunctionHeaderKnownSegmentContentIdentifierSegmentsParser} from "../function-header-known-segment-content-identifier-segments/FunctionHeaderKnownSegmentContentIdentifierSegmentsParser.ts";
import type {FunctionHeaderKnownSegmentContentParserPartialConcreteSyntaxTree} from "./FunctionHeaderKnownSegmentContentParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderKnownSegmentContentParser implements Parser {
	private readonly partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderKnownSegmentContentParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser {
		const functionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentFinalWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionHeaderKnownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionHeaderKnownSegmentContentFinalWhitespaceSegments,
				index,
				index,
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
		throw new Error(".");
	}
	public feedWithClosingSquareBracket(): never {
		throw new Error(".");
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error(".");
	}
	public feedWithClosingCurlyBracket(): never {
		throw new Error(".");
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
		const functionHeaderKnownSegment: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode =
			createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentOpeningBracket,
				null,
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
		throw new Error(".");
	}
	public feedWithIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderKnownSegmentContentIdentifierSegmentsParser {
		const functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderKnownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionHeaderKnownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderKnownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderKnownSegmentContentIdentifierSegmentsParser(
				index,
				functionHeaderKnownSegmentContentIdentifierSegments,
				index,
				null,
				index,
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
		throw new Error(".");
	}
	public finalize(): never {
		throw new Error(".");
	}
}
