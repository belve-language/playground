import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
