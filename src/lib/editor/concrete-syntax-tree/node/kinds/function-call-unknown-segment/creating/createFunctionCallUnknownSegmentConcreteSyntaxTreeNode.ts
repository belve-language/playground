import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentConcreteSyntaxTreeNode(
	children: FunctionCallUnknownSegmentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
