import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {Index} from "../../../../index/Index.ts";
export type FunctionHeaderParserPartialConcreteSyntaxTree = Readonly<{
	startingIndex: Index;
	children: readonly [
		functions: Readonly<{
			startingIndex: Index;
			children: readonly [
				firstFunction: Readonly<{
					startingIndex: Index;
					children: readonly [body: FunctionBodyConcreteSyntaxTreeNode];
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
