import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNodeChildren} from "../children/FunctionsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../FunctionsConcreteSyntaxTreeNode.ts";
import {functionsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionsConcreteSyntaxTreeNode(
	children: FunctionsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
