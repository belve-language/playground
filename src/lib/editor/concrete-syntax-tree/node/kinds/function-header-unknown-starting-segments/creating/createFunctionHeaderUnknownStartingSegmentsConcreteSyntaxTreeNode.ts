import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
