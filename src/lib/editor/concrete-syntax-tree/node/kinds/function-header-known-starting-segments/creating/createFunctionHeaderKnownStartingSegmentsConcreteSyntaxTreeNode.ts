import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
