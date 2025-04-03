import type {Index} from "../../../../index/Index.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
export type FunctionHeaderSegmentsParserPartialConcreteSyntaxTree = Readonly<{
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
								segments:
									| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
									| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode,
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
