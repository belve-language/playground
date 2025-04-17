import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentConcreteSyntaxTreeNode(
	children: FunctionHeaderKnownSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
