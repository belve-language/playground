import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
