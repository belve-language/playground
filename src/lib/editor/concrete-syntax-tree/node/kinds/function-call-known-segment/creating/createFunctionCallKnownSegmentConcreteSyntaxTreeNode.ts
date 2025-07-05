import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentConcreteSyntaxTreeNode(
	children: FunctionCallKnownSegmentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
