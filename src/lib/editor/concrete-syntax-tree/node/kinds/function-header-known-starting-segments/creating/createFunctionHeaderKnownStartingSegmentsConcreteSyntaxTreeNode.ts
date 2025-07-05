import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
