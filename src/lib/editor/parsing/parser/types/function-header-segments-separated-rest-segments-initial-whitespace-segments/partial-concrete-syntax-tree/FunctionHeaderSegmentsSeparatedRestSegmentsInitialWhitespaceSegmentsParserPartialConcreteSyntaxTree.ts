import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../../index/Index.ts";
export type FunctionHeaderSegmentsSeparatedRestSegmentsInitialWhitespaceSegmentsParserPartialConcreteSyntaxTree =
	Readonly<{
		startingIndex: Index;
		children: readonly [
			functions: Readonly<{
				startingIndex: Index;
				children: readonly [
					firstFunction: Readonly<{
						startingIndex: Index;
						children: readonly [
							header: Readonly<{
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
															segments: WhitespaceSegmentsConcreteSyntaxTreeNode,
														];
														endingIndex: Index;
													}>,
													segments:
														| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode
														| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
														| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
												];
												endingIndex: Index;
											}>,
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
