import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode} from "../FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
