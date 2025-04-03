import type {Index} from "../../../../index/Index.ts";
import type {BlockClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/block-closing-bracket/BlockClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segment/WhitespaceSegmentConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionCallSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree =
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
												startingIndex: Index;
												children: readonly [
													statements: Readonly<{
														startingIndex: Index;
														children: readonly [
															firstStatement: Readonly<{
																startingIndex: Index;
																children: readonly [
																	segments: Readonly<{
																		startingIndex: Index;
																		children: readonly [
																			restSegments: Readonly<{
																				startingIndex: Index;
																				children: readonly [
																					initialWhitespace: Readonly<{
																						startingIndex: Index;
																						children: readonly [
																							firstSegment: WhitespaceSegmentConcreteSyntaxTreeNode,
																							restSegments: WhitespaceSegmentsConcreteSyntaxTreeNode | null,
																						];
																						endingIndex: Index;
																					}>,
																					segments:
																						| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode
																						| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
																						| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode,
																				];
																				endingIndex: Index;
																			}>,
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
