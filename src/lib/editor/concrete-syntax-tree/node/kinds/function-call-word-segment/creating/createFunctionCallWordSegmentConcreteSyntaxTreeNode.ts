import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {IdentifierConcreteSyntaxTreeNode} from "../identifier/IdentifierConcreteSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "./FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {functionCallWordSegmentConcreteSyntaxTreeNodeKindName} from "./functionCallWordSegmentConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionCallWordSegmentConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionCallWordSegmentConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionCallWordSegmentConcreteSyntaxTreeNodeKindName,
		[identifier] as const,
		spanIndexes,
	);
}
