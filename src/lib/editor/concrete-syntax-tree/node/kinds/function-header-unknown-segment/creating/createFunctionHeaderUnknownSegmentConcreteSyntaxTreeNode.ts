import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
