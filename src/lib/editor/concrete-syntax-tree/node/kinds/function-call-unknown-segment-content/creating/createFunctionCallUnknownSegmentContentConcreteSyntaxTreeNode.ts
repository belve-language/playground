import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallUnknownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionCallUnknownSegmentContentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallUnknownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
