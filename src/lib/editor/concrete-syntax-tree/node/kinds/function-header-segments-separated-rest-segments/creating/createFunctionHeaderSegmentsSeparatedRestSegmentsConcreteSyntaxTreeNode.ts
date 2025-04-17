import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren} from "../children/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode(
	children: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
