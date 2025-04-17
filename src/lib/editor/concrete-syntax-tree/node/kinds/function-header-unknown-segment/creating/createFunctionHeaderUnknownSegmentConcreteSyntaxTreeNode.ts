import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
