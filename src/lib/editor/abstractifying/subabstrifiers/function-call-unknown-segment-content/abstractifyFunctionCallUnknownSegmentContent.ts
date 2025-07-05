import type {FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function-call-unknown-segment-content/FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionCallUnknownSegmentContent(
	content: FunctionCallUnknownSegmentContentConcreteSyntaxTreeNode,
): Identifier {
	const [, contentIdentifier] = content.data.children;
	return subabstractifyIdentifier(contentIdentifier);
}
