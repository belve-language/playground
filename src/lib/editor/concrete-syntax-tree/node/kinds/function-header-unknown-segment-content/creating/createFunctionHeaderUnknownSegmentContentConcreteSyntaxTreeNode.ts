import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
