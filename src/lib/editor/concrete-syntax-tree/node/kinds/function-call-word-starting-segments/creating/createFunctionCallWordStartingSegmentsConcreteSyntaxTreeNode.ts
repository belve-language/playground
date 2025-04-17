import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallWordStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
