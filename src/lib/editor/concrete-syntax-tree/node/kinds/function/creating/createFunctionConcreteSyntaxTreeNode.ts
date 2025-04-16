import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "./FunctionConcreteSyntaxTreeNode.ts";
import {functionConcreteSyntaxTreeNodeKindName} from "./functionConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionConcreteSyntaxTreeNodeKindName,
		[header, body] as const,
		spanIndexes,
	);
}
