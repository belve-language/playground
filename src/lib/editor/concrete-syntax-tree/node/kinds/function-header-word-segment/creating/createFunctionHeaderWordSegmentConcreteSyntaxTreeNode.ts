import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName} from "./functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionHeaderWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordSegmentConcreteSyntaxTreeNodeKindName,
		[identifier] as const,
		spanIndexes,
	);
}
