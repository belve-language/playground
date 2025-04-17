import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
	children: FunctionCallKnownSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
