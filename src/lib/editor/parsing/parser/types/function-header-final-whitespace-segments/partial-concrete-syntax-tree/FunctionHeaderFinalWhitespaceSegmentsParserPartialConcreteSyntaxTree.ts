import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceSegmentsConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace-segments/WhitespaceSegmentsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree/node/kinds/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../../index/Index.ts";
export type FunctionHeaderFinalWhitespaceSegmentsParserPartialConcreteSyntaxTree =
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
									finalWhitespace: Readonly<{
										startingIndex: Index;
										children: readonly [
											segments: WhitespaceSegmentsConcreteSyntaxTreeNode,
										];
										endingIndex: Index;
									}>,
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
