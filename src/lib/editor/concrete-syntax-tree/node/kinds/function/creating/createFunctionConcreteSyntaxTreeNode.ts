import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeChildren} from "../children/FunctionConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../FunctionConcreteSyntaxTreeNode.ts";
import {functionConcreteSyntaxTreeNodeKindName} from "../kind-name/functionConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionConcreteSyntaxTreeNode(
	children: FunctionConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
