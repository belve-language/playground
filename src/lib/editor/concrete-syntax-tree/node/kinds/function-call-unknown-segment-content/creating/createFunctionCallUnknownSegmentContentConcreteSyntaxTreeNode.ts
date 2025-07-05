import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
