import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
