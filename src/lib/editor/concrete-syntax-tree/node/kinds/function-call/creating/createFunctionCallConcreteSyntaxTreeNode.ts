import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../FunctionCallConcreteSyntaxTreeNode.ts";
import {functionCallConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallConcreteSyntaxTreeNode(
	children: FunctionCallConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
