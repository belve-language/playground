import type {OpeningCurlyBracketCharacter} from "../../../../characters/opening-curly-bracket/OpeningCurlyBracketCharacter.ts";
import type {OperatorCharacter} from "../../../../characters/operator/OperatorCharacter.ts";
import type {WhitespaceCharacter} from "../../../../characters/whitespace/WhitespaceCharacter.ts";
import type {Index} from "../../../../index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import {createBlockContentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-content/createBlockContentConcreteSyntaxTreeNode.ts";
import {createBlockOpeningBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-opening-bracket/createBlockOpeningBracketConcreteSyntaxTreeNode.ts";
import {createBlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block/createBlockConcreteSyntaxTreeNode.ts";
import {createFunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/createFunctionBodyConcreteSyntaxTreeNode.ts";
import {createOperatorConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/operator/createOperatorConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {createStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements/createStatementsConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/createWhitespaceSegmentConcreteSyntaxTreeNode.ts";
import {createWhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/createWhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Parser} from "../../Parser.ts";
import {FunctionHeaderParser} from "../function-header/FunctionHeaderParser.ts";
import {StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser} from "../statements-rest-statements-after-operator-whitespace-segments/StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser.ts";
import {StatementsRestStatementsBeforeOperatorParser} from "../statements-rest-statements-before-operator/StatementsRestStatementsBeforeOperatorParser.ts";
import type {StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree} from "./StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree.ts";
export class StatementsRestStatementsAfterOperatorParser implements Parser {
	private readonly partialConcreteSyntaxTree: StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree;
	public constructor(
		partialConcreteSyntaxTree: StatementsRestStatementsAfterOperatorParserPartialConcreteSyntaxTree,
	) {
		this.partialConcreteSyntaxTree = partialConcreteSyntaxTree;
	}
	public feedWithWhitespace(
		character: WhitespaceCharacter,
		index: Index,
	): StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser {
		const statementsRestStatementsAfterOperatorWhitespaceSegmentsFirstSegment =
			createWhitespaceSegmentConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsAfterOperatorWhitespaceSegments =
			createWhitespaceSegmentsConcreteSyntaxTreeNode(
				statementsRestStatementsAfterOperatorWhitespaceSegmentsFirstSegment,
				null,
				{starting: index, ending: index},
			);
		const statementsRestStatementsAfterOperatorWhitespaceSegmentsParser =
			new StatementsRestStatementsAfterOperatorWhitespaceSegmentsParser(
				index,
				statementsRestStatementsAfterOperatorWhitespaceSegments,
				index,
				this.statementsRestStatementsStatementsStartingIndex,
				this.statementsRestStatementsStatements,
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
		return statementsRestStatementsAfterOperatorWhitespaceSegmentsParser;
	}
	public feedWithOpeningSquareBracket(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingSquareBracket(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningCurlyBracket(
		character: OpeningCurlyBracketCharacter,
		index: Index,
	): FunctionHeaderParser | StatementsRestStatementsAfterOperatorParser {
		const blockOpeningBracket = createBlockOpeningBracketConcreteSyntaxTreeNode(
			character,
			index,
		);
		const blockContent = createBlockContentConcreteSyntaxTreeNode(
			null,
			this.statementsRestStatementsStatements,
			this.blockContentFinalWhitespace,
			{
				starting: this.statementsRestStatementsStatementsStartingIndex,
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
	public feedWithClosingCurlyBracket(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithOpeningRoundBracket(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithClosingRoundBracket(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithIdentifier(): never {
		throw new Error("Method not implemented.");
	}
	public feedWithOperator(character: OperatorCharacter, index: Index) {
		const statementsRestStatementsOperator =
			createOperatorConcreteSyntaxTreeNode(character, index);
		const statementsRestStatementsBeforeOperatorParser =
			new StatementsRestStatementsBeforeOperatorParser(
				index,
				statementsRestStatementsOperator,
				null,
				this.statementsRestStatementsStatements,
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
		throw new Error("Method not implemented.");
	}
}
