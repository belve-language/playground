import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
