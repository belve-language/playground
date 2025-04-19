import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
