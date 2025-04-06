import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "./FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName} from "./functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionHeaderWordSegmentConcreteSyntaxTreeNode(
	identifier: IdentifierConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionHeaderWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionHeaderWordSegmentConcreteSyntaxTreeNodeTypeName,
		[identifier] as const,
		spanIndexes,
	);
}
