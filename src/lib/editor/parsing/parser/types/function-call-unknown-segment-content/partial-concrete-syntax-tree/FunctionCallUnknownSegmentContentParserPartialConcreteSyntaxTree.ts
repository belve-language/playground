import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-call-unknown-segment-closing-bracket/FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../../index/Index.ts";
export type FunctionCallUnknownSegmentContentParserPartialConcreteSyntaxTree =
	Readonly<{
		children: readonly [
			functions: Readonly<{
				children: readonly [
					firstFunction: Readonly<{
						children: readonly [
							body: Readonly<{
								children: readonly [
									block: Readonly<{
										children: readonly [
											content: Readonly<{
												children: readonly [
													statements: Readonly<{
														children: readonly [
															firstStatement: Readonly<{
																children: readonly [
																	segments: Readonly<{
																		children: readonly [
																			firstSegment: Readonly<{
																				children: readonly [
																					closingBracket: FunctionCallUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
																				];
																				endingIndex: Index;
																			}>,
																			restSegments:
																				| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
																				| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
																				| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
																				| null
																				| FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
																		];
																		endingIndex: Index;
																	}>,
																];
																endingIndex: Index;
															}>,
															restStatements: StatementsRestStatementsConcreteSyntaxTreeNode | null,
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
