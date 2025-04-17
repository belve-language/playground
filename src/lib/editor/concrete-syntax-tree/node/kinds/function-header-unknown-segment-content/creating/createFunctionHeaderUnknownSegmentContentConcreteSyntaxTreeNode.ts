import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
