import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionBodyConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../FunctionBodyConcreteSyntaxTreeNode.ts";
import {functionBodyConcreteSyntaxTreeNodeKindName} from "../kind-name/functionBodyConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionBodyConcreteSyntaxTreeNode(
	children: FunctionBodyConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionBodyConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionBodyConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
