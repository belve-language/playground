import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
