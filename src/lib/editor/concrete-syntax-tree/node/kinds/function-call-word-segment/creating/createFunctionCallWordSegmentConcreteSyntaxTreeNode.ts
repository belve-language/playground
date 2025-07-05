import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordSegmentConcreteSyntaxTreeNode(
	children: FunctionCallWordSegmentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
