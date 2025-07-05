import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
