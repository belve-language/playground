import type {ClosingRoundBracketCharacter} from "../../../../characters/closing-round-bracket/ClosingRoundBracketCharacter.ts";
import type {ClosingSquareBracketCharacter} from "../../../../characters/closing-square-bracket/ClosingSquareBracketCharacter.ts";
import type {IdentifierCharacter} from "../../../../characters/identifier/IdentifierCharacter.ts";
import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/createBlockContentConcreteSyntaxTreeNode.ts";
import {createBlockOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-opening-bracket/createBlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {createBlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteSyntaxTreeNode.ts";
import {createFunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteSyntaxTreeNode.ts";
import {createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-segment-closing-bracket/createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-segments-separated-rest-segments/createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-closing-bracket/createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import {createFunctionCallConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/createFunctionCallConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segment/createIdentifierSegmentConcreteSyntaxTreeNode.ts";
import {createIdentifierSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier-segments/createIdentifierSegmentsConcreteSyntaxTreeNode.ts";
import {createOperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/createOperatorConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import {createWhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/createWhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionCallKnownSegmentContentParser} from "../function-call-known-segment-content/FunctionCallKnownSegmentContentParser.ts";
import {FunctionCallUnknownSegmentContentParser} from "../function-call-unknown-segment-content/FunctionCallUnknownSegmentContentParser.ts";
import {FunctionCallWordSegmentIdentifierSegmentsParser} from "../function-call-word-segment-identifier-segments/FunctionCallWordSegmentIdentifierSegmentsParser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorParser} from "../statements-rest-statements-after-operator/StatementsRestStatementsAfterOperatorParser.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree} from "./FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree.ts";
export class FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser
	implements Parser
{
	private readonly partialConcreteSyntaxTree: FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public parseWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser {
		const newFunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const newFunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				newFunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsFirstSegment,
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting: index,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser =
			new FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser(
				index,
				newFunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsEndingIndex,
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				this.functionCallSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				this.functionCallSegmentsSeparatedRestSegmentsSegments,
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
		return functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParser;
	}
	public parseOpeningSquareBracket(): never {
		throw new Error(".");
	}
	public parseClosingSquareBracket(
		character: ClosingSquareBracketCharacter,
		index: Index,
	): FunctionCallUnknownSegmentContentParser {
		const functionCallUnknownSegmentClosingBracket =
			createFunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegments =
			createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespace,
				this.functionCallSegmentsSeparatedRestSegmentsSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallUnknownSegmentContentParser =
			new FunctionCallUnknownSegmentContentParser(
				functionCallUnknownSegmentClosingBracket,
				index,
				functionCallSegmentsSeparatedRestSegments,
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
		return functionCallUnknownSegmentContentParser;
	}
	public parseOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): FunctionHeaderParser | StatementsRestStatementsAfterOperatorParser {
		const functionCall = createFunctionCallConcreteSyntaxTreeNode(
			this.functionCallSegmentsSeparatedRestSegmentsSegments,
			{
				starting:
					this.functionCallSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.functionCallEndingIndex,
			},
		);
		const statements = createStatementsConcreteSyntaxTreeNode(
			functionCall,
			this.statementsRestStatements,
			{
				starting:
					this.functionCallSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.statementsEndingIndex,
			},
		);
		const blockContentInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const blockOpeningBracket = createBlockOpeningBracketConcreteSyntaxTreeNode(
			character,
			index,
		);
		const blockContent = createBlockContentConcreteSyntaxTreeNode(
			blockContentInitialWhitespace,
			statements,
			this.blockContentFinalWhitespace,
			{
				starting:
					this
						.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
				ending: this.blockContentEndingIndex,
			},
		);
		const block = createBlockConcreteSyntaxTreeNode(
			blockOpeningBracket,
			blockContent,
			this.blockClosingBracket,
			{starting: index, ending: this.blockEndingIndex},
		);
		const [firstBlockStackEntry] = this.blockStack;
		if (typeof firstBlockStackEntry === "undefined") {
			const functionBody = createFunctionBodyConcreteSyntaxTreeNode(block, {
				starting: index,
				ending: this.functionBodyEndingIndex,
			});
			const functionHeaderParser = new FunctionHeaderParser(
				index,
				functionBody,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
			return functionHeaderParser;
		}
		const restBlockStackEntries: readonly (readonly [
			statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
			statementsEndingIndex: Index,
			finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
			contentEndingIndex: Index,
			closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
			endingIndex: Index,
		])[] = this.blockStack.slice(1);
		const statementsRestStatementsStatements =
			createStatementsConcreteSyntaxTreeNode(block, firstBlockStackEntry[0], {
				starting: index,
				ending: firstBlockStackEntry[1],
			});
		const statementsRestStatementsAfterOperatorParser =
			new StatementsRestStatementsAfterOperatorParser(
				index,
				statementsRestStatementsStatements,
				firstBlockStackEntry[1],
				firstBlockStackEntry[2],
				firstBlockStackEntry[3],
				firstBlockStackEntry[4],
				firstBlockStackEntry[5],
				restBlockStackEntries,
				this.functionBodyEndingIndex,
				this.functionEndingIndex,
				this.functionsRestFunctions,
				this.functionsEndingIndex,
				this.sourceFileContentFinalWhitespace,
				this.sourceFileContentEndingIndex,
			);
		return statementsRestStatementsAfterOperatorParser;
	}
	public parseClosingCurlyBracket(): never {
		throw new Error(".");
	}
	public parseOpeningRoundBracket(): never {
		throw new Error(".");
	}
	public parseClosingRoundBracket(
		character: ClosingRoundBracketCharacter,
		index: Index,
	): FunctionCallKnownSegmentContentParser {
		const functionCallKnownSegmentClosingBracket =
			createFunctionCallKnownSegmentClosingBracketConcreteSyntaxTreeNode(
				character,
				index,
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegments =
			createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespace,
				this.functionCallSegmentsSeparatedRestSegmentsSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallKnownSegmentContentParser =
			new FunctionCallKnownSegmentContentParser(
				functionCallKnownSegmentClosingBracket,
				index,
				functionCallSegmentsSeparatedRestSegments,
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
		return functionCallKnownSegmentContentParser;
	}
	public parseIdentifier(
		character: IdentifierCharacter,
		index: Index,
	): FunctionCallWordSegmentIdentifierSegmentsParser {
		const functionCallWordSegmentIdentifierSegmentsFirstSegment =
			createIdentifierSegmentConcreteSyntaxTreeNode(character, index);
		const functionCallWordSegmentIdentifierSegments =
			createIdentifierSegmentsConcreteSyntaxTreeNode(
				functionCallWordSegmentIdentifierSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegments =
			createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespace,
				this.functionCallSegmentsSeparatedRestSegmentsSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending: this.functionCallSegmentsEndingIndex,
				},
			);
		const functionCallWordSegmentIdentifierSegmentsParser =
			new FunctionCallWordSegmentIdentifierSegmentsParser(
				index,
				functionCallWordSegmentIdentifierSegments,
				index,
				index,
				index,
				functionCallSegmentsSeparatedRestSegments,
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
		return functionCallWordSegmentIdentifierSegmentsParser;
	}
	public parseOperator(
		character: OperatorCharacter,
		index: Index,
	): StatementsRestStatementsBeforeOperatorParser {
		const operator = createOperatorConcreteSyntaxTreeNode(character, index);
		const functionCall = createFunctionCallConcreteSyntaxTreeNode(
			this.functionCallSegmentsSeparatedRestSegmentsSegments,
			{
				starting:
					this.functionCallSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
				ending: this.functionCallEndingIndex,
			},
		);
		const statementsRestStatementsStatements =
			createStatementsConcreteSyntaxTreeNode(
				functionCall,
				this.statementsRestStatements,
				{
					starting:
						this.functionCallSegmentsSeparatedRestSegmentsSegmentsStartingIndex,
					ending: this.statementsEndingIndex,
				},
			);
		const functionCallSegmentsSeparatedRestSegmentsInitialWhitespace =
			createWhitespaceConcreteSyntaxTreeNode(
				this.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegments,
				{
					starting:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsStartingIndex,
					ending:
						this
							.functionCallSegmentsSeparatedRestSegmentsInitialWhitespaceEndingIndex,
				},
			);
		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				index,
				operator,
				functionCallSegmentsSeparatedRestSegmentsInitialWhitespace,
				statementsRestStatementsStatements,
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
		return statementsRestStatementsBeforeOperatorParser;
	}
	public finalize(): never {
		throw new Error("Not implemented.");
	}
}
