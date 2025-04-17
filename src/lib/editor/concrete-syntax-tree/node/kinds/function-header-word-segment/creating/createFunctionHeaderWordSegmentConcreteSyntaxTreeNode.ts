import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
	children: FunctionHeaderWordSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
