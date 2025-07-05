import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
