import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
