import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningSquareBracketCharacter} from "../../../../characters/opening-square-bracket/OpeningSquareBracketCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import {createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-opening-bracket/createFunctionCallUnknownSegmentOpeningBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment/createFunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallSegmentsParser} from "../function-call-segments-parser/FunctionCallSegmentsParser.ts";
import {FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser} from "../function-call-unknown-segment-content-final-whitespace-segments/FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {FunctionCallUnknownSegmentContentIdentifierSegmentsParser} from "../function-call-unknown-segment-content-identifier-segments/FunctionCallUnknownSegmentContentIdentifierSegmentsParser.ts";
import type {FunctionCallUnknownSegmentContentParserPartialConcreteSyntaxTree} from "./FunctionCallUnknownSegmentContentParserPartialConcreteSyntaxTree.ts";
export class FunctionCallUnknownSegmentContentParser implements Parser {
	private readonly partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionCallUnknownSegmentContentParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser {
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentFinalWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentFinalWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser =
			new FunctionCallUnknownSegmentContentFinalWhitespaceSegmentsParser(
				index,
				functionCallUnknownSegmentContentFinalWhitespaceSegments,
				index,
				index,
				index,
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
		return functionCallUnknownSegmentContentFinalWhitespaceSegmentsParser;
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
		const functionCallUnknownSegment =
			createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
				functionCallUnknownSegmentOpeningBracket,
				null,
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
			"Unknown segment content cannot contain a closing square bracket.",
		);
	}
	public feedWithOpeningCurlyBracket(): never {
		throw new Error(
			"Unknown segment content cannot contain an opening curly bracket.",
		);
	}
	public feedWithClosingCurlyBracket(): never {
		throw new Error(
			"Unknown segment content cannot contain a closing curly bracket.",
		);
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error(
			"Unknown segment content cannot contain an opening round bracket.",
		);
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error(
			"Unknown segment content cannot contain a closing round bracket.",
		);
	}
	public feedWithIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentIdentifierSegmentsParser {
		const functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallUnknownSegmentContentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallUnknownSegmentContentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallUnknownSegmentContentIdentifierSegmentsParser: FunctionCallUnknownSegmentContentIdentifierSegmentsParser =
			new FunctionCallUnknownSegmentContentIdentifierSegmentsParser(
				index,
				functionCallUnknownSegmentContentIdentifierSegments,
				index,
				index,
				null,
				index,
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
		throw new Error("Unknown segment content cannot contain an operator.");
	}
	public finalize(): never {
		throw new Error("Unknown segment content cannot be finalized.");
	}
}
