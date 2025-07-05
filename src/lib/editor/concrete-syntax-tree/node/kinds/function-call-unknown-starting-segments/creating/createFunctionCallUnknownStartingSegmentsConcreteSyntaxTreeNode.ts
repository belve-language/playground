import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
