import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-segment-closing-bracket/FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../index/Index.ts";
export type FunctionHeaderUnknownSegmentContentInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree =
	Readonly<{
		children: readonly [
			functions: Readonly<{
				children: readonly [
					firstFunction: Readonly<{
						children: readonly [
							header: Readonly<{
								children: readonly [
									segments: Readonly<{
										children: readonly [
											firstSegment: Readonly<{
												children: readonly [
													content: Readonly<{
														startingIndex: Index;
														children: readonly [
															initialWhitespace: Readonly<{
																startingIndex: Index;
																children: readonly [
																	segments: WhitespaceSegmentsConcreteSyntaxTreeNode,
																];
																endingIndex: Index;
															}>,
															identifier: IdentifierConcreteSyntaxTreeNode,
															finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
														];
														endingIndex: Index;
													}>,
													closingBracket: FunctionHeaderUnknownSegmentClosingBracketConcreteSyntaxTreeNode,
												];
												endingIndex: Index;
											}>,
											restSegments:
												| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
												| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
												| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
												| null
												| FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
										];
										endingIndex: Index;
									}>,
									finalWhitespace: WhitespaceConcreteSyntaxTreeNode | null,
								];
								endingIndex: Index;
							}>,
							body: FunctionBodyConcreteSyntaxTreeNode,
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
