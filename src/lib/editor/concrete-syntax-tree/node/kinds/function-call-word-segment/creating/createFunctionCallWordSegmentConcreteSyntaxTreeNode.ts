import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordSegmentConcreteSyntaxTreeNode(
	children: FunctionCallWordSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
