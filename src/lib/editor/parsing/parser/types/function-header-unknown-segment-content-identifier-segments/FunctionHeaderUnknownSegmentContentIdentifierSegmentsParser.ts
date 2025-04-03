import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
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
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/createIdentifierConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderSegmentsParser} from "../function-header-segments/FunctionHeaderSegmentsParser.ts";
import {FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser} from "../function-header-unknown-segment-content-initial-whitespace-segments/FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser.ts";
import type {FunctionHeaderUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree} from "./FunctionHeaderUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionHeaderUnknownSegmentContentIdentifierSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser {
		const functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionHeaderUnknownSegmentContentInitialWhitespaceSegments: WhitespaceSegmentsConcreteSyntaxTreeNode =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionHeaderUnknownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionHeaderUnknownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderUnknownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser =
			new FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParser(
				index,
				functionHeaderUnknownSegmentContentInitialWhitespaceSegments,
				index,
				functionHeaderUnknownSegmentContentIdentifier,
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
		const functionHeaderUnknownSegmentContentIdentifier =
			createIdentifierConcreteSyntaxTreeNode(
				this.functionHeaderUnknownSegmentContentIdentifierSegments,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentIdentifierSegmentsStartingIndex,
					ending: this.functionHeaderUnknownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContent: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode =
			createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
				null,
				functionHeaderUnknownSegmentContentIdentifier,
				this.functionHeaderUnknownSegmentContentFinalWhitespace,
				{
					starting:
						this
							.functionHeaderUnknownSegmentContentIdentifierSegmentsStartingIndex,
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
		throw new Error(
			"Unexpected closing square bracket character in function header unknown segment content identifier characters.",
		);
	}
	public parseOpeningCurlyBracket(): never {
		throw new Error(
			"Unexpected opening curly bracket character in function header unknown segment content identifier characters.",
		);
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(
			"Unexpected closing curly bracket character in function header unknown segment content identifier characters.",
		);
	}
	public parseOpeningRoundBracket(): never {
		throw new Error(
			"Unexpected opening round bracket character in function header unknown segment content identifier characters.",
		);
	}
	public parseClosingRoundBracket(): never {
		throw new Error(
			"Unexpected closing round bracket character in function header unknown segment content identifier characters.",
		);
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser {
		const newFunctionHeaderUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionHeaderUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				newFunctionHeaderUnknownSegmentContentIdentifierSegmentsFirstSegment,
				this.functionHeaderUnknownSegmentContentIdentifierSegments,
				{
					starting: index,
					ending: this.functionHeaderUnknownSegmentContentIdentifierEndingIndex,
				},
			);
		const functionHeaderUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionHeaderUnknownSegmentContentIdentifierSegmentsParser(
				index,
				newFunctionHeaderUnknownSegmentContentIdentifierSegments,
				this.functionHeaderUnknownSegmentContentIdentifierEndingIndex,
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
		return functionHeaderUnknownSegmentContentIdentifierSegmentsParser;
	}
	public parseOperator(): never {
		throw new Error(
			"Unexpected operator character in function header unknown segment content identifier characters.",
		);
	}
	public finalize(): never {
		throw new Error(
			"Unexpected end of function header unknown segment content identifier characters.",
		);
	}
}
