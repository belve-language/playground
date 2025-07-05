import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
