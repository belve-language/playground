import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
	children: FunctionCallUnknownSegmentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
