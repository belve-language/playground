import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../index/Index.ts";
export type BlockContentParserPartialConcreteSyntaxTree = Readonly<{
	children: readonly [
		functions: Readonly<{
			children: readonly [
				firstFunction: Readonly<{
					children: readonly [
						body: Readonly<{
							children: readonly [
								block: Readonly<{
									children: readonly [
										closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
									];
									endingIndex: Index;
								}>,
								blockStack: readonly Readonly<{
									children: readonly [
										Readonly<{
											children: readonly [
												Readonly<{
													children: readonly [
														statementsRestStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
													];
													endingIndex: Index;
												}>,
												finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
											];
											endingIndex: Index;
										}>,
										closingBracket: BlockClosingBracketConcreteSyntaxTreeNode,
									];
									endingIndex: Index;
								}>[],
							];
							endingIndex: Index;
						}>,
					];
					endingIndex: Index;
				}>,
				restFunctions:
					| FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode
					| null
					| FunctionsConcreteSyntaxTreeNode,
			];
			endingIndex: Index;
		}>,
		finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
	];
	endingIndex: Index;
}>;
