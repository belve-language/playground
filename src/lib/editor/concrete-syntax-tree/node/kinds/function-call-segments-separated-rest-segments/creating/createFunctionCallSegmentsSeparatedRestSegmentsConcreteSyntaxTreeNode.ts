import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
	children: FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
