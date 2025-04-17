import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNodeChildren} from "../children/FunctionBodyConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../FunctionBodyConcreteSyntaxTreeNode.ts";
import {functionBodyConcreteSyntaxTreeNodeKindName} from "../kind-name/functionBodyConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionBodyConcreteSyntaxTreeNode(
	children: FunctionBodyConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionBodyConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionBodyConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
