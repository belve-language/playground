import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
	children: FunctionHeaderWordSegmentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
