import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren} from "../children/FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionCallKnownSegmentContentConcreteSyntaxTreeNode} from "../FunctionCallKnownSegmentContentConcreteSyntaxTreeNode.ts";
import {functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName} from "../kind-name/functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallKnownSegmentContentConcreteSyntaxTreeNode(
	children: FunctionCallKnownSegmentContentConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionCallKnownSegmentContentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallKnownSegmentContentConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
