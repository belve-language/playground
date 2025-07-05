import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../FunctionHeaderConcreteSyntaxTreeNode.ts";
import {functionHeaderConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderConcreteSyntaxTreeNode(
	children: FunctionHeaderConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
