import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../FunctionHeaderConcreteSyntaxTreeNode.ts";
import {functionHeaderConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderConcreteSyntaxTreeNode(
	children: FunctionHeaderConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
