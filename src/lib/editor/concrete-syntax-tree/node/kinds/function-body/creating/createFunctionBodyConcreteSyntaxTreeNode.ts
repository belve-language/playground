import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../block/BlockConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "./FunctionBodyConcreteSyntaxTreeNode.ts";
import {functionBodyConcreteSyntaxTreeNodeKindName} from "./functionBodyConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionBodyConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionBodyConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionBodyConcreteSyntaxTreeNodeKindName,
		[block] as const,
		spanIndexes,
	);
}
